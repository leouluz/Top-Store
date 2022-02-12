import React from "react";

import { Container } from './styles'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Container>
    <input ref={ref} {...props} />
  </Container>
));

export default Input;