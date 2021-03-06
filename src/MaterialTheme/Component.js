import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import theme from './theme';

const CustomComponent = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Reboot />
    {children}
  </MuiThemeProvider>
);

CustomComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomComponent;
