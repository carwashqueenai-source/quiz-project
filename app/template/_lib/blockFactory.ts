import { v4 as uuid } from 'uuid';
import type { Block, BlockType } from './types';
import { DEFAULT_PROPERTIES } from './defaults';

export function createBlock(type: BlockType): Block {
  return {
    id: uuid(),
    type,
    properties: DEFAULT_PROPERTIES[type](),
  };
}
