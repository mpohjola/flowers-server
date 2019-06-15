import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class FlowerWatering extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  userFlowerId: number;

  @property({
    type: 'number',
    required: true,
  })
  waterAmount: number;

  @property({
    type: 'date',
  })
  date?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<FlowerWatering>) {
    super(data);
  }
}

export interface FlowerWateringRelations {
  // describe navigational properties here
}

export type FlowerWateringWithRelations = FlowerWatering & FlowerWateringRelations;
