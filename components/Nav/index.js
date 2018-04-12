// @flow
/* eslint-disable */
import * as React from 'react';
import PropTypes from 'prop-types';
import { SideNav } from './styles';
import connect from './store';

type Props = {
  pathname: string,
  authenticated?: boolean,
  actions: {
    logout: Function
  }
};

const Nav = ({ pathname, authenticated, actions: { logout } }: Props) => (
  <SideNav />
);

Nav.defaultProps = {
  authenticated: false
};

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default connect(Nav);
