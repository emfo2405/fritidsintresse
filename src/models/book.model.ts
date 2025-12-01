import {Entity, model, property} from '@loopback/repository';


@model()
export class Book extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Author: string;

  @property({
    type: 'string',
    required: true,
  })
  Title: string;

  @property({
    type: 'number',
    jsonSchema: {
      minimum: 0,
      maximum: 10,
    },
  })
  Review?: number;

  @property({
    type: 'boolean',
    required: true,
  })
  Read: boolean;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {
      maximum: 9999,
    },
  })
  Published: number;

  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
