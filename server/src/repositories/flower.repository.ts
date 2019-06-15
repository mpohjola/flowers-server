import {DefaultCrudRepository} from '@loopback/repository';
import {Flower, FlowerRelations} from '../models';
import {InMemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FlowerRepository extends DefaultCrudRepository<
  Flower,
  typeof Flower.prototype.id,
  FlowerRelations
> {
  constructor(
    @inject('datasources.InMemory') dataSource: InMemoryDataSource,
  ) {
    super(Flower, dataSource);
  }
}
