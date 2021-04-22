import styled, {css} from "styled-components";
import {PRIMARY, SECONDARY} from "./colors";
import React, {ForwardRefRenderFunction, InputHTMLAttributes} from "react";
import Box from "./Box";

export type StyledProps = {
  hasValue?: boolean;
  invalid?: boolean;
};

// Duplicate Props for docs
export type PropTypes = {
  /** Label for the input, required, used for a11y */
  label: string;
  /**
   * An optional property for styling
   * Useful for uncontrolled inputs, that will not update the `value` prop
   * {@link InputStory} for some context on usage
   */
  hasValue?: boolean;
  /**
   * This property helps with A11Y and with validation
   * Usage is highly recommended
   */
  invalid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const FloatingLabel = styled.label<StyledProps>`
  position: absolute;
  left: 1.2rem;
  top: 1.6rem;
  font-size: 1.6rem;
  line-height: 1.5;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  pointer-events: none;
`;

const StyledInput = styled.input<StyledProps>`
  padding: 1.6rem 1.2rem;
  width: 100%;
  outline: 0;
  border: 1px solid ${SECONDARY};
  border-radius: 0;
  font-size: 1.6rem;
  appearance: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${PRIMARY};
  }

  ${(p) =>
  p.hasValue &&
  css`
      &,
      &:focus {
        padding: 2.2rem 1.2rem 1rem 1.2rem;
        & + ${FloatingLabel} {
          transform: translate(0, -75%);
          font-size: 0.9rem;
          background: transparent;
        }
      }
    `}
  ${(p) =>
  p.invalid &&
  css`
      background-color: red;
    `}
`;


/**
 * Component to Render the input for forms.
 * Forwards ref, to use with form libraries.
 * @param prop - See PropTypes
 * @param ref - Reference for the input
 * @constructor
 */
const Input: ForwardRefRenderFunction<HTMLInputElement, PropTypes> = (
  { label, hasValue, value, name, invalid, ...rest },
  ref
) => (
  <Box position="relative">
    <StyledInput
      id={`id-${name}`}
      aria-invalid={invalid ? 'true' : 'false'}
      name={name}
      value={value}
      hasValue={hasValue || !!value}
      invalid={invalid}
      ref={ref}
      {...rest}
    />
    <FloatingLabel hasValue={!!value} invalid={invalid} htmlFor={`id-${name}`}>
      {label}
    </FloatingLabel>
  </Box>
);

export { Input as RawInput };

const RefInput = React.forwardRef(Input);

export default RefInput;
