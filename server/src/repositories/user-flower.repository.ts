import {DefaultCrudRepository} from '@loopback/repository';
import {UserFlower, UserFlowerRelations} from '../models';
import {InMemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserFlowerRepository extends DefaultCrudRepository<
  UserFlower,
  typeof UserFlower.prototype.id,
  UserFlowerRelations
> {
  constructor(
    @inject('datasources.InMemory') dataSource: InMemoryDataSource,
  ) {
    super(UserFlower, dataSource);
  }
}
