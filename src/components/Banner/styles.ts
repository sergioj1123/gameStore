import styled from 'styled-components';
import bannerImg from '../../assets/images/banner-homem-aranha.png';
import { TagContainer } from '../Tag/styles';

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url('${bannerImg}');
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`;

export const Price = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`;
