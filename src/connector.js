import { GraphQLConnector } from '@gramps/gramps-express';

export default class IMDBAPIConnector extends GraphQLConnector {
  /**
   * API for looking up movie info
   * @member {string}
   */
  constructor(props) {
    super(props);
    this.apiBaseUri = 'https://www.theimdbapi.org/api';
  }
}
