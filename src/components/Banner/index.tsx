import { Image, Price, Title } from './styles';

const Banner = () => (
  <Image>
    <div className="container">
      <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
      <Price>
        De <span>R$ 250,00</span>
        <br />
        por apenas R$ 199,90
      </Price>
    </div>
  </Image>
);

export default Banner;
