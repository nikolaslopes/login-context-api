import { ButtonField } from './styles';
import { IButtonSubmit } from './types';

export function ButtonSubmit({
  widthButton,
  heightButton,
  label,
  ...rest
}: IButtonSubmit) {
  return (
    <ButtonField widthButton={widthButton} heightButton={heightButton}>
      <button type="button" {...rest}>
        {label}
      </button>
    </ButtonField>
  );
}

export default ButtonSubmit;
