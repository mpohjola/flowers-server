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
import {FlowerWatering} from '../models';
import {FlowerWateringRepository} from '../repositories';

export class FlowerWateringController {
  constructor(
    @repository(FlowerWateringRepository)
    public flowerWateringRepository : FlowerWateringRepository,
  ) {}

  @post('/flower-waterings', {
    responses: {
      '200': {
        description: 'FlowerWatering model instance',
        content: {'application/json': {schema: {'x-ts-type': FlowerWatering}}},
      },
    },
  })
  async create(@requestBody() flowerWatering: FlowerWatering): Promise<FlowerWatering> {
    return await this.flowerWateringRepository.create(flowerWatering);
  }

  @get('/flower-waterings/count', {
    responses: {
      '200': {
        description: 'FlowerWatering model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(FlowerWatering)) where?: Where<FlowerWatering>,
  ): Promise<Count> {
    return await this.flowerWateringRepository.count(where);
  }

  @get('/flower-waterings', {
    responses: {
      '200': {
        description: 'Array of FlowerWatering model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': FlowerWatering}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(FlowerWatering)) filter?: Filter<FlowerWatering>,
  ): Promise<FlowerWatering[]> {
    return await this.flowerWateringRepository.find(filter);
  }

  @patch('/flower-waterings', {
    responses: {
      '200': {
        description: 'FlowerWatering PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() flowerWatering: FlowerWatering,
    @param.query.object('where', getWhereSchemaFor(FlowerWatering)) where?: Where<FlowerWatering>,
  ): Promise<Count> {
    return await this.flowerWateringRepository.updateAll(flowerWatering, where);
  }

  @get('/flower-waterings/{id}', {
    responses: {
      '200': {
        description: 'FlowerWatering model instance',
        content: {'application/json': {schema: {'x-ts-type': FlowerWatering}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<FlowerWatering> {
    return await this.flowerWateringRepository.findById(id);
  }

  @patch('/flower-waterings/{id}', {
    responses: {
      '204': {
        description: 'FlowerWatering PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() flowerWatering: FlowerWatering,
  ): Promise<void> {
    await this.flowerWateringRepository.updateById(id, flowerWatering);
  }

  @put('/flower-waterings/{id}', {
    responses: {
      '204': {
        description: 'FlowerWatering PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() flowerWatering: FlowerWatering,
  ): Promise<void> {
    await this.flowerWateringRepository.replaceById(id, flowerWatering);
  }

  @del('/flower-waterings/{id}', {
    responses: {
      '204': {
        description: 'FlowerWatering DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.flowerWateringRepository.deleteById(id);
  }
}
