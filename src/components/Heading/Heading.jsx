import { createElement } from 'react';
import PropTypes from 'prop-types';

const Heading = ({ type, children }) => createElement(type, {}, children);

Heading.propTypes = {
  type: PropTypes.oneOfType(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node).isRequired,
  ]),
};

Heading.defaultProps = {
  type: 'h2',
  children: '',
};

export default Heading;
