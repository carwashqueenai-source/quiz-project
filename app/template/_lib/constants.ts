export const COLUMN_PRESETS = [
  { id: '100', label: '100%', widths: [100] },
  { id: '50-50', label: '50/50', widths: [50, 50] },
  { id: '33-33-33', label: '33/33/33', widths: [33.33, 33.33, 33.34] },
  { id: '25-25-25-25', label: '25/25/25/25', widths: [25, 25, 25, 25] },
  { id: '66-33', label: '66/33', widths: [66.66, 33.34] },
  { id: '33-66', label: '33/66', widths: [33.34, 66.66] },
  { id: '25-25-50', label: '25/25/50', widths: [25, 25, 50] },
  { id: '50-25-25', label: '50/25/25', widths: [50, 25, 25] },
];

export const FONT_FAMILIES = [
  { value: 'inherit', label: 'Body Font' },
  { value: 'Arial, sans-serif', label: 'Arial' },
  { value: 'Helvetica, sans-serif', label: 'Helvetica' },
  { value: 'Georgia, serif', label: 'Georgia' },
  { value: '"Times New Roman", serif', label: 'Times New Roman' },
  { value: '"Courier New", monospace', label: 'Courier New' },
  { value: 'Verdana, sans-serif', label: 'Verdana' },
  { value: '"Trebuchet MS", sans-serif', label: 'Trebuchet MS' },
  { value: 'Tahoma, sans-serif', label: 'Tahoma' },
];

export const FONT_WEIGHTS = [
  { value: '300', label: 'Light' },
  { value: '400', label: 'Regular' },
  { value: '500', label: 'Medium' },
  { value: '600', label: 'Semi Bold' },
  { value: '700', label: 'Bold' },
  { value: '800', label: 'Extra Bold' },
];

export const BORDER_STYLES = [
  { value: 'solid', label: 'Solid' },
  { value: 'dashed', label: 'Dashed' },
  { value: 'dotted', label: 'Dotted' },
  { value: 'none', label: 'None' },
];

export const SOCIAL_PLATFORMS = [
  { id: 'facebook', label: 'Facebook', icon: '📘' },
  { id: 'twitter', label: 'Twitter', icon: '🐦' },
  { id: 'x', label: 'X', icon: '✖' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼' },
  { id: 'instagram', label: 'Instagram', icon: '📷' },
  { id: 'pinterest', label: 'Pinterest', icon: '📌' },
  { id: 'vimeo', label: 'Vimeo', icon: '🎬' },
  { id: 'youtube', label: 'YouTube', icon: '▶️' },
  { id: 'snapchat', label: 'Snapchat', icon: '👻' },
  { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
  { id: 'reddit', label: 'Reddit', icon: '🤖' },
  { id: 'messenger', label: 'Messenger', icon: '💭' },
  { id: 'tripadvisor', label: 'TripAdvisor', icon: '🦉' },
  { id: 'medium', label: 'Medium', icon: 'Ⓜ' },
  { id: 'patreon', label: 'Patreon', icon: '🅿' },
  { id: 'rss', label: 'RSS', icon: '📡' },
  { id: 'tumblr', label: 'Tumblr', icon: '📝' },
  { id: 'spotify', label: 'Spotify', icon: '🎵' },
  { id: 'soundcloud', label: 'SoundCloud', icon: '☁️' },
  { id: 'skype', label: 'Skype', icon: '📞' },
  { id: 'github', label: 'GitHub', icon: '🐙' },
  { id: 'discord', label: 'Discord', icon: '🎮' },
  { id: 'telegram', label: 'Telegram', icon: '✈️' },
  { id: 'tiktok', label: 'TikTok', icon: '🎵' },
  { id: 'email', label: 'Email', icon: '✉️' },
];

export const CONTENT_TOOLS: { type: string; label: string; icon: string }[] = [
  { type: 'columns', label: 'Columns', icon: '⊞' },
  { type: 'button', label: 'Button', icon: '☐' },
  { type: 'divider', label: 'Divider', icon: '—' },
  { type: 'heading', label: 'Heading', icon: 'H' },
  { type: 'paragraph', label: 'Paragraph', icon: '¶' },
  { type: 'image', label: 'Image', icon: '🖼' },
  { type: 'video', label: 'Video', icon: '▶' },
  { type: 'social', label: 'Social', icon: '👥' },
  { type: 'menu', label: 'Menu', icon: '☰' },
  { type: 'html', label: 'HTML', icon: '</>' },
  { type: 'table', label: 'Table', icon: '⊞' },
];

export const ACTION_TYPES = [
  { value: 'open-website', label: 'Open Website' },
  { value: 'send-email', label: 'Send Email' },
  { value: 'call-phone', label: 'Call Phone' },
];

export const TARGET_OPTIONS = [
  { value: '_blank', label: 'New Tab' },
  { value: '_self', label: 'Same Tab' },
];
