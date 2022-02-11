import { PropsWithChildren, ReactNode } from 'react';

import { Container } from './styles';

type IWrapper = PropsWithChildren<ReactNode>;

export function Wrapper({ children }: IWrapper) {
  return <Container>{children}</Container>;
}
