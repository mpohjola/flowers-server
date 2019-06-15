import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './in-memory.datasource.json';

export class InMemoryDataSource extends juggler.DataSource {
  static dataSourceName = 'InMemory';

  constructor(
    @inject('datasources.config.InMemory', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
