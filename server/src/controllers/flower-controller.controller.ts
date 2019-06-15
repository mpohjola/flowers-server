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
import {Flower} from '../models';
import {FlowerRepository} from '../repositories';

export class FlowerControllerController {
  constructor(
    @repository(FlowerRepository)
    public flowerRepository : FlowerRepository,
  ) {}

  @post('/flowers', {
    responses: {
      '200': {
        description: 'Flower model instance',
        content: {'application/json': {schema: {'x-ts-type': Flower}}},
      },
    },
  })
  async create(@requestBody() flower: Flower): Promise<Flower> {
    return await this.flowerRepository.create(flower);
  }

  @get('/flowers/count', {
    responses: {
      '200': {
        description: 'Flower model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Flower)) where?: Where<Flower>,
  ): Promise<Count> {
    return await this.flowerRepository.count(where);
  }

  @get('/flowers', {
    responses: {
      '200': {
        description: 'Array of Flower model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Flower}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Flower)) filter?: Filter<Flower>,
  ): Promise<Flower[]> {
    return await this.flowerRepository.find(filter);
  }

  @patch('/flowers', {
    responses: {
      '200': {
        description: 'Flower PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() flower: Flower,
    @param.query.object('where', getWhereSchemaFor(Flower)) where?: Where<Flower>,
  ): Promise<Count> {
    return await this.flowerRepository.updateAll(flower, where);
  }

  @get('/flowers/{id}', {
    responses: {
      '200': {
        description: 'Flower model instance',
        content: {'application/json': {schema: {'x-ts-type': Flower}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Flower> {
    return await this.flowerRepository.findById(id);
  }

  @patch('/flowers/{id}', {
    responses: {
      '204': {
        description: 'Flower PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() flower: Flower,
  ): Promise<void> {
    await this.flowerRepository.updateById(id, flower);
  }

  @put('/flowers/{id}', {
    responses: {
      '204': {
        description: 'Flower PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() flower: Flower,
  ): Promise<void> {
    await this.flowerRepository.replaceById(id, flower);
  }

  @del('/flowers/{id}', {
    responses: {
      '204': {
        description: 'Flower DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.flowerRepository.deleteById(id);
  }
}
