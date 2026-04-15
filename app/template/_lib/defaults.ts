import type {
  Padding, Border, RoundedBorder, ActionConfig,
  ColumnsProperties, ButtonProperties, DividerProperties,
  HeadingProperties, ParagraphProperties, ImageProperties,
  VideoProperties, SocialProperties, MenuProperties,
  HtmlProperties, TableProperties, TableCellStyle, BlockType, BlockProperties,
} from './types';

export const defaultPadding = (value = 10): Padding => ({
  top: value, right: value, bottom: value, left: value, allSides: true,
});

export const defaultBorder = (): Border => ({
  style: 'solid', width: 0, color: '#cccccc', allSides: true,
});

export const defaultRoundedBorder = (): RoundedBorder => ({
  topLeft: 4, topRight: 4, bottomLeft: 4, bottomRight: 4, allSides: true,
});

export const defaultAction = (): ActionConfig => ({
  actionType: 'open-website', url: '', target: '_blank',
});

const defaultTableCellStyle = (bold = false): TableCellStyle => ({
  fontFamily: 'inherit',
  bgColor: bold ? '#e0e0e0' : '#ffffff',
  fontWeight: bold ? '700' : '400',
  fontSize: 14,
  textColor: '',
  textAlign: 'left',
  verticalAlign: 'middle',
  lineHeight: 140,
  letterSpacing: 0,
  padding: defaultPadding(10),
});

export const DEFAULT_PROPERTIES: Record<BlockType, () => BlockProperties> = {
  columns: (): BlockProperties => ({
    type: 'columns',
    preset: '100',
    columns: [{ blocks: [], bgColor: '', padding: defaultPadding(0), border: defaultBorder() }],
    rowBgColor: '',
    rowContentBgColor: '',
    rowBgImage: '',
    rowBgImageUrl: '',
    rowPadding: defaultPadding(0),
    hideOnDesktop: false,
  } as ColumnsProperties & { type: 'columns' }),

  button: (): BlockProperties => ({
    type: 'button',
    text: 'Button Text',
    action: defaultAction(),
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    widthAuto: true,
    widthPercent: 100,
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 120,
    letterSpacing: 0,
    alignment: 'center',
    padding: { top: 10, right: 20, bottom: 10, left: 20, allSides: false },
    border: defaultBorder(),
    roundedBorder: defaultRoundedBorder(),
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as ButtonProperties & { type: 'button' }),

  divider: (): BlockProperties => ({
    type: 'divider',
    width: 100,
    lineStyle: 'solid',
    lineWidth: 1,
    lineColor: '#cccccc',
    alignment: 'center',
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as DividerProperties & { type: 'divider' }),

  heading: (): BlockProperties => ({
    type: 'heading',
    text: 'Heading',
    headingType: 'h1',
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: 22,
    color: '',
    textAlign: 'left',
    lineHeight: 140,
    letterSpacing: 0,
    inheritBodyStyles: true,
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as HeadingProperties & { type: 'heading' }),

  paragraph: (): BlockProperties => ({
    type: 'paragraph',
    text: 'This is a new Paragraph block. Change the text.',
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: 14,
    color: '',
    textAlign: 'left',
    lineHeight: 140,
    letterSpacing: 0,
    inheritBodyStyles: true,
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as ParagraphProperties & { type: 'paragraph' }),

  image: (): BlockProperties => ({
    type: 'image',
    src: '',
    altText: '',
    widthAuto: true,
    widthPercent: 100,
    alignment: 'center',
    action: defaultAction(),
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as ImageProperties & { type: 'image' }),

  video: (): BlockProperties => ({
    type: 'video',
    videoUrl: '',
    action: defaultAction(),
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as VideoProperties & { type: 'video' }),

  social: (): BlockProperties => ({
    type: 'social',
    iconType: 'circle',
    icons: [
      { platform: 'facebook', url: '', enabled: true },
      { platform: 'x', url: '', enabled: true },
      { platform: 'instagram', url: '', enabled: true },
      { platform: 'linkedin', url: '', enabled: true },
    ],
    alignment: 'center',
    iconSize: 32,
    iconSpacing: 5,
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as SocialProperties & { type: 'social' }),

  menu: (): BlockProperties => ({
    type: 'menu',
    items: [],
    fontFamily: 'inherit',
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 0,
    textColor: '#000000',
    linkColor: '#3b82f6',
    alignment: 'center',
    layout: 'horizontal',
    separator: '',
    padding: { top: 5, right: 15, bottom: 5, left: 15, allSides: false },
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as MenuProperties & { type: 'menu' }),

  html: (): BlockProperties => ({
    type: 'html',
    code: '<strong>Hello, world!</strong>',
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as HtmlProperties & { type: 'html' }),

  table: (): BlockProperties => ({
    type: 'table',
    columns: 2,
    rows: 2,
    border: { style: 'solid', width: 1, color: '#cccccc', allSides: true },
    stripedRows: false,
    enableHeader: true,
    headerStyle: defaultTableCellStyle(true),
    contentStyle: defaultTableCellStyle(false),
    enableFooter: false,
    linkColor: '#3b82f6',
    linkUnderline: true,
    cellData: [['Add text', ''], ['', '']],
    headerData: ['Add header text', ''],
    containerPadding: defaultPadding(10),
    hideOnDesktop: false,
  } as TableProperties & { type: 'table' }),
};
