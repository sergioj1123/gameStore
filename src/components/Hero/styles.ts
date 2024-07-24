import styled from 'styled-components';
import colors from '../../styles/variables';
import { TagContainer } from '../Tag/styles';
import { breakpoints } from '../../styles/styles';

export const Banner = styled.div`
  position: relative;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.tablet}) {
    backgroud-size: cover;
  }
`;

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin: 16px 0;
  }
  span {
    display: block;
    text-decoration: line-through;
  }
  .normal-price {
    text-decoration: none;
  }
`;
