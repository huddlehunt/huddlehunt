import { graphql } from 'react-apollo';
import getUserGql from './getUser.gql';

const withData = graphql(getUserGql);

export default comp => withData(comp);
