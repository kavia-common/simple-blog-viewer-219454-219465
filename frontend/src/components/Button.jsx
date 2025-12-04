import React from 'react';
import PropTypes from 'prop-types';

/**
 * PUBLIC_INTERFACE
 * Button
 * Reusable button following theme tokens.
 */
export default function Button({ children, variant = 'primary', size = 'medium', ...rest }) {
  const classNames = ['btn'];
  if (variant === 'secondary') classNames.push('secondary');
  if (size === 'small') classNames.push('small');
  if (size === 'large') classNames.push('large');

  return (
    <button className={classNames.join(' ')} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
