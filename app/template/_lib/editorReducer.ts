import type { EditorState, EditorAction, Block } from './types';
import { v4 as uuid } from 'uuid';

export const initialEditorState: EditorState = {
  templateName: 'Untitled Template',
  blocks: [],
  selectedBlockId: null,
  previewMode: 'desktop',
  history: { past: [], future: [] },
};

function pushHistory(state: EditorState): EditorState['history'] {
  return {
    past: [...state.history.past.slice(-49), state.blocks],
    future: [],
  };
}

export function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case 'ADD_BLOCK': {
      const newBlocks = [...state.blocks];
      newBlocks.splice(action.payload.index, 0, action.payload.block);
      return {
        ...state,
        blocks: newBlocks,
        selectedBlockId: action.payload.block.id,
        history: pushHistory(state),
      };
    }

    case 'REMOVE_BLOCK': {
      return {
        ...state,
        blocks: state.blocks.filter((b) => b.id !== action.payload.id),
        selectedBlockId:
          state.selectedBlockId === action.payload.id ? null : state.selectedBlockId,
        history: pushHistory(state),
      };
    }

    case 'DUPLICATE_BLOCK': {
      const idx = state.blocks.findIndex((b) => b.id === action.payload.id);
      if (idx === -1) return state;
      const original = state.blocks[idx];
      const duplicate: Block = {
        ...original,
        id: uuid(),
        properties: JSON.parse(JSON.stringify(original.properties)),
      };
      const newBlocks = [...state.blocks];
      newBlocks.splice(idx + 1, 0, duplicate);
      return {
        ...state,
        blocks: newBlocks,
        selectedBlockId: duplicate.id,
        history: pushHistory(state),
      };
    }

    case 'MOVE_BLOCK': {
      const { fromIndex, toIndex } = action.payload;
      if (fromIndex === toIndex) return state;
      const newBlocks = [...state.blocks];
      const [moved] = newBlocks.splice(fromIndex, 1);
      newBlocks.splice(toIndex, 0, moved);
      return {
        ...state,
        blocks: newBlocks,
        history: pushHistory(state),
      };
    }

    case 'SELECT_BLOCK': {
      return { ...state, selectedBlockId: action.payload.id };
    }

    case 'UPDATE_BLOCK_PROPS': {
      return {
        ...state,
        blocks: state.blocks.map((b) =>
          b.id === action.payload.id
            ? { ...b, properties: { ...b.properties, ...action.payload.properties } as Block['properties'] }
            : b
        ),
        history: pushHistory(state),
      };
    }

    case 'SET_TEMPLATE_NAME': {
      return { ...state, templateName: action.payload };
    }

    case 'SET_PREVIEW_MODE': {
      return { ...state, previewMode: action.payload };
    }

    case 'UNDO': {
      if (state.history.past.length === 0) return state;
      const previous = state.history.past[state.history.past.length - 1];
      return {
        ...state,
        blocks: previous,
        selectedBlockId: null,
        history: {
          past: state.history.past.slice(0, -1),
          future: [state.blocks, ...state.history.future],
        },
      };
    }

    case 'REDO': {
      if (state.history.future.length === 0) return state;
      const next = state.history.future[0];
      return {
        ...state,
        blocks: next,
        selectedBlockId: null,
        history: {
          past: [...state.history.past, state.blocks],
          future: state.history.future.slice(1),
        },
      };
    }

    default:
      return state;
  }
}
