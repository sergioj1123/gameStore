import styled from 'styled-components';

import { Props } from '.';
import colors from '../../styles/variables';
import { Card } from '../Product/styles';

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'gray' ? colors.gray : colors.black};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? colors.black : colors.gray};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 40px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`;
