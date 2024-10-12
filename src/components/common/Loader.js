import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loader = ({
  size = 40, color = ' #2727F5', className = '', borderWidth = 3, ...p
}) => (
  <div className={classNames('loader_wrapper', className)} {...p}>
    <span style={{
      width: size,
      height: size,
      borderColor: color,
      borderWidth,
    }}
    />
  </div>
);

Loader.propTypes = {
  size: PropTypes.number,
  borderWidth: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Loader;
