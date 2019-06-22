import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Flower extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  latinName?: string;

  @property({
    type: 'string',
  })
  soilType?: string;

  @property({
    type: 'number',
  })
  waterFrequency?: number;

  @property({
    type: 'string',
  })
  waterAmount?: string;

  @property({
    type: 'string',
  })
  lifeSpan?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Flower>) {
    super(data);
  }
}

export interface FlowerRelations {
  // describe navigational properties here
}

export type FlowerWithRelations = Flower & FlowerRelations;
