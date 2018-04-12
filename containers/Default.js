// @flow
import * as React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';
import Nav from '../components/Nav';

const Default = ({ title, url, children }) => (
  <App>
    <Helmet>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:200,300,500,700,900"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Comfortaa:700"
        rel="stylesheet"
      />
    </Helmet>
    <Nav pathname={url.pathname} />
    {children}
  </App>
);

Default.propTypes = {
  title: PropTypes.string,
  url: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

Default.defaultProps = {
  title: 'yanivcancode'
};

export default Default;
