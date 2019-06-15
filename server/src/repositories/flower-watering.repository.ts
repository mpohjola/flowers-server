import {DefaultCrudRepository} from '@loopback/repository';
import {FlowerWatering, FlowerWateringRelations} from '../models';
import {InMemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FlowerWateringRepository extends DefaultCrudRepository<
  FlowerWatering,
  typeof FlowerWatering.prototype.id,
  FlowerWateringRelations
> {
  constructor(
    @inject('datasources.InMemory') dataSource: InMemoryDataSource,
  ) {
    super(FlowerWatering, dataSource);
  }
}
