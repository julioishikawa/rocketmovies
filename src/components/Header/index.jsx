import { Link } from 'react-router-dom';

import { Input } from '../Input';

import { Container, Content, Profile } from "./styles";

export function Header() {
  return (
    <Container>
        <h1> RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />
        
      <Content>
        <div>
          <Link to="#aa">
            <strong>shuharib0t</strong>
          </Link>

          <Link to="#aaa">
            sair
          </Link>
        </div>

        <Profile to="#aa">
          <img src="https://github.com/shuharib0t.png" alt="foto do usuário" />
        </Profile>
      </Content>
    </Container>
  );
}