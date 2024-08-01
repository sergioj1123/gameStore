import { Container, FooterSection, Link, Links, SectionTitle } from './styles';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <Link
            title="Clique aqui para acessar jogos de RPG"
            to="/categories#rpg"
          >
            RPG
          </Link>
          <Link
            title="Clique aqui para acessar jogos de Ação"
            to="/categories#action"
          >
            Ação
          </Link>
          <Link
            title="Clique aqui para acessar jogos de Simulação"
            to="/categories#simulation"
          >
            Simulação
          </Link>
          <Link
            title="Clique aqui para acessar jogos de Esportes"
            to="/categories#sports"
          >
            Esportes
          </Link>
          <Link
            title="Clique aqui para acessar jogos de Luta"
            to="/categories#fight"
          >
            Luta
          </Link>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <Link
            title="Clique aqui para acessar a sessão de Promoções "
            to="/#on-sale"
          >
            Promoções
          </Link>
          <Link
            title="Clique aqui para acessar a sessão de em breve "
            to="/#coming-soon"
          >
            Em Breve
          </Link>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
);

export default Footer;
