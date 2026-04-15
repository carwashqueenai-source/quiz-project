export type BlockType =
  | 'columns'
  | 'button'
  | 'divider'
  | 'heading'
  | 'paragraph'
  | 'image'
  | 'video'
  | 'social'
  | 'menu'
  | 'html'
  | 'table';

export interface Padding {
  top: number;
  right: number;
  bottom: number;
  left: number;
  allSides: boolean;
}

export interface Border {
  style: 'solid' | 'dashed' | 'dotted' | 'none';
  width: number;
  color: string;
  allSides: boolean;
}

export interface RoundedBorder {
  topLeft: number;
  topRight: number;
  bottomLeft: number;
  bottomRight: number;
  allSides: boolean;
}

export interface ActionConfig {
  actionType: 'open-website' | 'send-email' | 'call-phone';
  url: string;
  target: '_blank' | '_self';
}

// --- Block Properties ---

export interface ColumnCell {
  blocks: Block[];
  bgColor: string;
  padding: Padding;
  border: Border;
}

export interface ColumnsProperties {
  preset: string;
  columns: ColumnCell[];
  rowBgColor: string;
  rowContentBgColor: string;
  rowBgImage: string;
  rowBgImageUrl: string;
  rowPadding: Padding;
  hideOnDesktop: boolean;
}

export interface ButtonProperties {
  text: string;
  action: ActionConfig;
  bgColor: string;
  textColor: string;
  widthAuto: boolean;
  widthPercent: number;
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  alignment: 'left' | 'center' | 'right' | 'justify';
  padding: Padding;
  border: Border;
  roundedBorder: RoundedBorder;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface DividerProperties {
  width: number;
  lineStyle: 'solid' | 'dashed' | 'dotted';
  lineWidth: number;
  lineColor: string;
  alignment: 'left' | 'center' | 'right' | 'justify';
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface HeadingProperties {
  text: string;
  headingType: 'h1' | 'h2' | 'h3' | 'h4';
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  color: string;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  lineHeight: number;
  letterSpacing: number;
  inheritBodyStyles: boolean;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface ParagraphProperties {
  text: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  color: string;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  lineHeight: number;
  letterSpacing: number;
  inheritBodyStyles: boolean;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface ImageProperties {
  src: string;
  altText: string;
  widthAuto: boolean;
  widthPercent: number;
  alignment: 'left' | 'center' | 'right' | 'justify';
  action: ActionConfig;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface VideoProperties {
  videoUrl: string;
  action: ActionConfig;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface SocialIcon {
  platform: string;
  url: string;
  enabled: boolean;
}

export interface SocialProperties {
  iconType: 'circle' | 'square' | 'rounded';
  icons: SocialIcon[];
  alignment: 'left' | 'center' | 'right';
  iconSize: number;
  iconSpacing: number;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface MenuItem {
  id: string;
  text: string;
  url: string;
}

export interface MenuProperties {
  items: MenuItem[];
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  letterSpacing: number;
  textColor: string;
  linkColor: string;
  alignment: 'left' | 'center' | 'right' | 'justify';
  layout: 'horizontal' | 'vertical';
  separator: string;
  padding: Padding;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface HtmlProperties {
  code: string;
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export interface TableCellStyle {
  fontFamily: string;
  bgColor: string;
  fontWeight: string;
  fontSize: number;
  textColor: string;
  textAlign: 'left' | 'center' | 'right' | 'justify';
  verticalAlign: 'top' | 'middle' | 'bottom';
  lineHeight: number;
  letterSpacing: number;
  padding: Padding;
}

export interface TableProperties {
  columns: number;
  rows: number;
  border: Border;
  stripedRows: boolean;
  enableHeader: boolean;
  headerStyle: TableCellStyle;
  contentStyle: TableCellStyle;
  enableFooter: boolean;
  linkColor: string;
  linkUnderline: boolean;
  cellData: string[][];
  headerData: string[];
  containerPadding: Padding;
  hideOnDesktop: boolean;
}

export type BlockProperties =
  | { type: 'columns' } & ColumnsProperties
  | { type: 'button' } & ButtonProperties
  | { type: 'divider' } & DividerProperties
  | { type: 'heading' } & HeadingProperties
  | { type: 'paragraph' } & ParagraphProperties
  | { type: 'image' } & ImageProperties
  | { type: 'video' } & VideoProperties
  | { type: 'social' } & SocialProperties
  | { type: 'menu' } & MenuProperties
  | { type: 'html' } & HtmlProperties
  | { type: 'table' } & TableProperties;

export interface Block {
  id: string;
  type: BlockType;
  properties: BlockProperties;
}

export interface EditorState {
  templateName: string;
  blocks: Block[];
  selectedBlockId: string | null;
  previewMode: 'desktop' | 'mobile';
  history: {
    past: Block[][];
    future: Block[][];
  };
}

export type EditorAction =
  | { type: 'ADD_BLOCK'; payload: { block: Block; index: number } }
  | { type: 'REMOVE_BLOCK'; payload: { id: string } }
  | { type: 'DUPLICATE_BLOCK'; payload: { id: string } }
  | { type: 'MOVE_BLOCK'; payload: { fromIndex: number; toIndex: number } }
  | { type: 'SELECT_BLOCK'; payload: { id: string | null } }
  | { type: 'UPDATE_BLOCK_PROPS'; payload: { id: string; properties: Partial<BlockProperties> } }
  | { type: 'SET_TEMPLATE_NAME'; payload: string }
  | { type: 'SET_PREVIEW_MODE'; payload: 'desktop' | 'mobile' }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'LOAD_STATE'; payload: { templateName: string; blocks: Block[] } };
