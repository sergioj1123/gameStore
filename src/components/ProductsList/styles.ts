import styled from 'styled-components';

import { Props } from '.';
import colors from '../../styles/variables';
import { Card } from '../Product/styles';
import { breakpoints } from '../../styles/styles';

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.gray : colors.black};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? colors.black : colors.gray};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;
