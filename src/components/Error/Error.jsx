import React from 'react';
import classNames from 'classnames';
import { bool } from 'prop-types';
import './Error.scss';

const Error = ({ name }) => {
  const ErrorClass = classNames('error', name && 'is-error');
  return <div className={ErrorClass} />;
};

Error.propTypes = {
  name: bool,
};

export default Error;
