import styled from 'styled-components';
import colors from '../../styles/variables';
import { Props } from './index';

export const TagContainer = styled.div<Props>`
  display: inline-block;
  background-color: ${colors.green};
  color: ${colors.withe};
  padding: ${({ size }: Props) => (size === 'large' ? '4px 6px' : '4px 6px')};
  font-weight: bold;
  border-radius: 8px;
  font-size: ${({ size }: Props) => (size === 'large' ? '16px' : '10px')};
`;
