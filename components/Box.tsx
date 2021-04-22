import {
  compose,
  color,
  space,
  layout,
  position,
  background,
  typography,
  border,
  PositionProps,
  LayoutProps,
  SpaceProps,
  BackgroundProps,
  TypographyProps,
  BorderProps,
  ColorProps,
} from 'styled-system';
import styled, { css } from 'styled-components';

const transparentCss = css`
  opacity: 0.5;
`;

type ExtraProps = {
  transparent?: boolean;
};

export type PropTypes = PositionProps &
  SpaceProps &
  LayoutProps &
  BackgroundProps &
  TypographyProps &
  BorderProps &
  ColorProps &
  ExtraProps;

const Box = styled.div<PropTypes>`
  ${compose(space, layout, position, background, typography, border, color)}
  ${(p: ExtraProps) => p.transparent && transparentCss};
`;

export default Box;
