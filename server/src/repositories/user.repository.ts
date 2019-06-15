import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {InMemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.identifier,
  UserRelations
> {
  constructor(
    @inject('datasources.InMemory') dataSource: InMemoryDataSource,
  ) {
    super(User, dataSource);
  }
}
