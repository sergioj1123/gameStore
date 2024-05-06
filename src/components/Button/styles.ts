import styled from 'styled-components';
import colors from '../../styles/variables';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.button`
  border: 2px solid ${colors.withe};
  color: ${colors.withe};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
`;

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.withe};
  color: ${colors.withe};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
`;
