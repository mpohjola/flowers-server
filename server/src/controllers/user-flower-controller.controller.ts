import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {UserFlower} from '../models';
import {UserFlowerRepository} from '../repositories';

export class UserFlowerControllerController {
  constructor(
    @repository(UserFlowerRepository)
    public userFlowerRepository : UserFlowerRepository,
  ) {}

  @post('/user-flowers', {
    responses: {
      '200': {
        description: 'UserFlower model instance',
        content: {'application/json': {schema: {'x-ts-type': UserFlower}}},
      },
    },
  })
  async create(@requestBody() userFlower: UserFlower): Promise<UserFlower> {
    return await this.userFlowerRepository.create(userFlower);
  }

  @get('/user-flowers/count', {
    responses: {
      '200': {
        description: 'UserFlower model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(UserFlower)) where?: Where<UserFlower>,
  ): Promise<Count> {
    return await this.userFlowerRepository.count(where);
  }

  @get('/user-flowers', {
    responses: {
      '200': {
        description: 'Array of UserFlower model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': UserFlower}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(UserFlower)) filter?: Filter<UserFlower>,
  ): Promise<UserFlower[]> {
    return await this.userFlowerRepository.find(filter);
  }

  @patch('/user-flowers', {
    responses: {
      '200': {
        description: 'UserFlower PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() userFlower: UserFlower,
    @param.query.object('where', getWhereSchemaFor(UserFlower)) where?: Where<UserFlower>,
  ): Promise<Count> {
    return await this.userFlowerRepository.updateAll(userFlower, where);
  }

  @get('/user-flowers/{id}', {
    responses: {
      '200': {
        description: 'UserFlower model instance',
        content: {'application/json': {schema: {'x-ts-type': UserFlower}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<UserFlower> {
    return await this.userFlowerRepository.findById(id);
  }

  @patch('/user-flowers/{id}', {
    responses: {
      '204': {
        description: 'UserFlower PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() userFlower: UserFlower,
  ): Promise<void> {
    await this.userFlowerRepository.updateById(id, userFlower);
  }

  @put('/user-flowers/{id}', {
    responses: {
      '204': {
        description: 'UserFlower PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userFlower: UserFlower,
  ): Promise<void> {
    await this.userFlowerRepository.replaceById(id, userFlower);
  }

  @del('/user-flowers/{id}', {
    responses: {
      '204': {
        description: 'UserFlower DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userFlowerRepository.deleteById(id);
  }
}
