import { GraphQLConnector } from '@gramps/gramps-express';
import Connector from '../src/connector';

const DATA_SOURCE_NAME = 'IMDBAPI';
const connector = new Connector();
console.log('connector:', connector)

describe(`${DATA_SOURCE_NAME}Connector`, () => {

  it('inherits the GraphQLConnector class', () => {
    expect(connector).toBeInstanceOf(GraphQLConnector);
  });

  it('uses the appropriate URL', () => {
    expect(connector.apiBaseUri).toBe(`https://www.theimdbapi.org/api`);
  });
});
