export interface IButton {
  id: string;
  label?: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large' | 'full';
  custumstyle?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}
