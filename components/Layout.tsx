import React, {FC} from "react";
import styled from "styled-components";
import {flexbox, FlexboxProps} from 'styled-system';

import {PRIMARY} from './colors';

const Wrapper = styled.div``;
const Box = styled.div<FlexboxProps>`${flexbox}`;
const Flex = styled(Box)`display: flex;`;
const Header = styled(Flex).attrs({as: 'header', flexDirection: 'row'})`
  background-color: ${PRIMARY};
  padding: 20px;
`;
const Content = styled.section``;

const Layout: FC = ({children}) => (
  <Wrapper>
    <Header>
      <Flex flex="0">NL</Flex>
      <Flex flex="1"/>
      <Flex flex="0">Menu</Flex>
    </Header>
    <Content>{children}</Content>
  </Wrapper>
)



export default Layout;
