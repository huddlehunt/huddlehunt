import { graphql } from 'react-apollo';
import getUserGql from './getCurrentUser.gql';

const withData = graphql(getUserGql);

export default comp => withData(comp);
