import {Entity, model, property, belongsTo} from '@loopback/repository';
import { User } from './user.model';
import { Flower } from './flower.model';

@model({settings: {strict: false}})
export class UserFlower extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'date',
  })
  added?: string;

  @property({
    type: 'number',
  })
  age?: number;

  // Define well-known properties here

  @belongsTo(() => User)
  userId: string;

  @belongsTo(() => Flower)
  flowerId: number;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<UserFlower>) {
    super(data);
  }
}

export interface UserFlowerRelations {
  // describe navigational properties here
}

export type UserFlowerWithRelations = UserFlower & UserFlowerRelations;
