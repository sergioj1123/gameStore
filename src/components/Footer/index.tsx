import { Container, FooterSection, Link, Links, SectionTitle } from './styles';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <Link>Games</Link>
          <Link>Consoles</Link>
          <Link>Acessórios</Link>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <Link>Novidades</Link>
          <Link>Promoções</Link>
          <Link>Em Breve</Link>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
);

export default Footer;
