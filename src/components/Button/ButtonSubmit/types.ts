import { ButtonHTMLAttributes } from 'react';

export interface IButtonSubmit extends ButtonHTMLAttributes<HTMLButtonElement> {
  widthButton?: string;
  heightButton?: string;
  label: string;
}
