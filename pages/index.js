// @flow
import * as React from 'react';
// import Home from '../components/Home';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

export default withData(props => <DefaultCon {...props} />);
