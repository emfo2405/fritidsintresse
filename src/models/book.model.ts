import {Entity, model, property} from '@loopback/repository';

@model()
export class Book extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Author: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'string',
    required: true,
  })
  Title: string;

  @property({
    type: 'number',
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
