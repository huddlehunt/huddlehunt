import React from 'react';
import PropTypes from 'prop-types';
import AuthFields from '../AuthFields';
import validate from '../AuthFields/validation';
import connect from './data';

class SignUpForm extends React.Component {
  static propTypes = {
    mutations: PropTypes.shape({
      signUp: PropTypes.func.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      signIn: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    errors: {},
    serverErrors: {},
    touched: false
  };

  getServerErrors(err) {
    if (err.graphQLErrors) {
      const obj = {};
      obj.message = err.graphQLErrors[0].message;
      this.setState({
        serverErrors: obj
      });
    }
  }

  formFields = [
    { key: 1, attr: { name: 'firstName', type: 'text', label: 'First Name' } },
    { key: 2, attr: { name: 'lastName', type: 'text', label: 'Last Name' } },
    { key: 3, attr: { name: 'email', type: 'email', label: 'Email' } },
    { key: 4, attr: { name: 'password', type: 'password', label: 'Password' } },
    { key: 5, attr: { name: 'occupation', type: 'text', label: 'Occupation' } },
    { key: 6, attr: { name: 'username', type: 'text', label: 'Username' } },
    { key: 7, attr: { name: 'location', type: 'text', label: 'Location' } },
    {
      key: 8,
      attr: { name: 'profilePic', type: 'file', label: 'Profile Picture' }
    }
  ];

  handleTouch = () => {
    this.setState({ touched: true });
  };

  handleFileDrop = fileUrl => {
    const obj = {};
    // the key for this object shouldn't be hard-coded,
    // should be passed to this function but need to figure out where/how to do this properly
    obj.profilePic = fileUrl;
    this.setState(obj);
  };

  handleChange = e => {
    // when file is uploaded, this needs to set state to file URL, not input value
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    const obj = {};
    obj[fieldName] = fieldValue;
    this.setState(obj);
  };

  handleSubmit(e, valuesPack) {
    e.preventDefault();

    // reset state
    this.setState({
      errors: {},
      serverErrors: {}
    });

    const handleValidate = validate(valuesPack);

    if (handleValidate.touched) {
      this.setState({ touched: handleValidate.touched });
    }
    if (handleValidate.errors) {
      return this.setState({ errors: handleValidate.errors });
    }

    this.props.mutations
      .signUp(valuesPack)
      .then(response => {
        if (response.data.signinUser) {
          this.props.actions.signIn(
            response.data.signinUser.token,
            response.data.signinUser.user.username
          );
        } else {
          this.setState({
            errors: response.data.createUser.errors
          });
        }
      })
      .catch(err => {
        this.getServerErrors(err);
      });
  }

  render() {
    const fields = this.formFields;
    // Packing all the necessary auth field states
    const valuesPack = {};

    fields.map(x => {
      const y = x.attr.name;
      valuesPack[y] = this.state[y];
      return valuesPack;
    });

    return (
      <div>
        <AuthFields
          handleSubmit={e => {
            this.handleSubmit(e, valuesPack);
          }}
          handleChange={this.handleChange}
          handleFileDrop={this.handleFileDrop}
          fields={fields}
          selectFields="signUpFields"
          errors={this.state.errors}
          touched={this.state.touched}
          handleTouch={this.handleTouch}
        />
        <br />
        <div>
          {Object.keys(this.state.errors).length === 0 &&
            this.state.serverErrors.message}
        </div>
      </div>
    );
  }
}

export default connect(SignUpForm);
