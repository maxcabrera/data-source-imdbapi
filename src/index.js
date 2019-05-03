import typeDefs from './schema.graphql';
import context from './context';
import resolvers from './resolvers';
import mocks from './mocks';

/*
 * For more information on the building GrAMPS data sources, see
 * https://gramps.js.org/data-source/data-source-overview/
 */
export default {
  namespace: 'DataSourceBase',
  context,
  typeDefs,
  resolvers,
  mocks,
};
