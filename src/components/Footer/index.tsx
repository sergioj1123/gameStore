import { Container, FooterSection, Link, Links, SectionTitle } from './styles';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <Link to="/categories#rpg">RPG</Link>
          <Link to="/categories#action">Ação</Link>
          <Link to="/categories#simulation">Simulação</Link>
          <Link to="/categories#sports">Esportes</Link>
          <Link to="/categories#fight">Luta</Link>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <Link to="/#on-sale">Promoções</Link>
          <Link to="/#coming-soon">Em Breve</Link>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
);

export default Footer;
