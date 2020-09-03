import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

export default styled(NavLink)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: ${COLORS.DARK_GREY};

  &:hover {
    color: ${COLORS.LIGHT_RED};
    -webkit-transition: 0.3s;
  }
`;
