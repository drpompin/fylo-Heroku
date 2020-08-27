import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import { createGlobalStyle } from 'styled-components'
import Header from './Header';
// // import Footer from './Footer';

export const LayoutBody = styled.div`
    width: 100%;
    height: 100%;
`
const GlobalStyle = createGlobalStyle`
  body {
    margin: ${props => (props.noMargin ? '0px' : '8px')};
    font-family: ${props => (props.openSans ? ' sans' : 'cursive')};
    font-weight: ${props => (props.normalWeight ? '300' : '600')}
    background-color: ${props => (props.darkBlue ? '#1B2330' : '#FFF')}
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

const Layout = (props) => {
  return (
    <LayoutBody>
      <GlobalStyle noMargin openSans normalWeight darkBlue />
      <Header />
      {props.children}
      {/* <Footer/> */}
    </LayoutBody>
  )
};

export default Layout;