import { Link } from 'react-router-dom';

import { Input } from '../Input';

import { Container, Content, Profile } from "./styles";

export function Header() {
  return (
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />
        
      <Content>
        <div>
          <Link to="/profile">
            <strong>shuharib0t</strong>
          </Link>

          <Link to="#">
            sair
          </Link>
        </div>

        <Profile to="/profile">
          <img src="https://github.com/shuharib0t.png" alt="foto do usuário" />
        </Profile>
      </Content>
    </Container>
  );
}