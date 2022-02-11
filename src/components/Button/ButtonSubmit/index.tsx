import { ContainerAnimation, ButtonField } from './styles';
import { IButtonSubmit } from './types';

export function ButtonSubmit({
  widthButton,
  heightButton,
  label,
  ...rest
}: IButtonSubmit) {
  return (
    <ContainerAnimation>
      <ButtonField widthButton={widthButton} heightButton={heightButton}>
        <button type="button" {...rest}>
          {label}
        </button>
      </ButtonField>
    </ContainerAnimation>
  );
}

export default ButtonSubmit;
