import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { Main, SubmitButton } from './styles';

const AuthFields = props => {
  const {
    selectFields,
    fields,
    handleTouch,
    handleChange,
    handleFileDrop,
    handleSubmit,
    touched,
    errors
  } = props;
  const onDrop = files => {
    const data = new FormData();
    data.append('data', files[0]);

    fetch('https://api.graph.cool/file/v1/cj5o4cp4iwr8d0160vkfr1dk6', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then(file => {
        handleFileDrop(file.url);
      });
  };
  const mapFields = fields.map(field =>
    <div key={field.key}>
      {field.attr.type !== 'file' &&
        <input
          name={field.attr.name}
          type={field.attr.type}
          placeholder={field.attr.label}
          onChange={handleChange}
          onFocus={handleTouch}
        />}
      {field.attr.type === 'file' &&
        <Dropzone
          inputProps={field.attr}
          onDrop={onDrop}
          accept="image/*"
          multiple={false}
        >
          <p>Drop your profile pic here, or click to browse and upload</p>
        </Dropzone>}
      {errors &&
        <div>
          {errors[field.attr.name]}
        </div>}
    </div>
  );
  const authMethod =
    (selectFields === 'signinFields' && 'Sign In') || 'Sign Up';
  return (
    <Main>
      <h1>
        {authMethod}
      </h1>
      <form>
        {mapFields}
        <br />
        <SubmitButton
          onClick={handleSubmit}
          touched={touched}
          disabled={!touched}
        >
          {authMethod}
        </SubmitButton>
      </form>
    </Main>
  );
};

AuthFields.propTypes = {
  selectFields: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired,
  handleTouch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFileDrop: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

export default AuthFields;
