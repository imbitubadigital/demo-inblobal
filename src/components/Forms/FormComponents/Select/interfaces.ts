export interface OptionsInterface {
  label: string;
  value: number | string;
}

export interface SelectProps {
  name: string;
  title: string;
  placeholderText: string;
  options?: OptionsInterface[];
  disabled?: boolean;
  isTeam?: boolean;
}
