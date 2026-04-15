'use client';

import type { Block } from '../../_lib/types';
import ColumnsRenderer from './ColumnsRenderer';
import ButtonRenderer from './ButtonRenderer';
import DividerRenderer from './DividerRenderer';
import HeadingRenderer from './HeadingRenderer';
import ParagraphRenderer from './ParagraphRenderer';
import ImageRenderer from './ImageRenderer';
import VideoRenderer from './VideoRenderer';
import SocialRenderer from './SocialRenderer';
import MenuRenderer from './MenuRenderer';
import HtmlRenderer from './HtmlRenderer';
import TableRenderer from './TableRenderer';

export default function BlockRenderer({ block }: { block: Block }) {
  const props = block.properties;

  switch (props.type) {
    case 'columns': return <ColumnsRenderer properties={props} />;
    case 'button': return <ButtonRenderer properties={props} />;
    case 'divider': return <DividerRenderer properties={props} />;
    case 'heading': return <HeadingRenderer properties={props} blockId={block.id} />;
    case 'paragraph': return <ParagraphRenderer properties={props} blockId={block.id} />;
    case 'image': return <ImageRenderer properties={props} />;
    case 'video': return <VideoRenderer properties={props} />;
    case 'social': return <SocialRenderer properties={props} />;
    case 'menu': return <MenuRenderer properties={props} />;
    case 'html': return <HtmlRenderer properties={props} />;
    case 'table': return <TableRenderer properties={props} />;
    default: return <div className="p-4 text-gray-400 text-sm">Unknown block type</div>;
  }
}
