import { Link, useNavigate } from 'react-router-dom';
import { Container, Search, Profile, Content } from "./styles";
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/Missing_avatar.svg';

export function Header({children}) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

	function handleSignOut() {
		navigation("/");
		signOut();
	}

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
        <h1>RocketMovies</h1>

        <Search>
          {children}
        </Search>
        
      <Content>
        <div>
          <Link to="/profile">
            <strong>
              {user.name}
            </strong>
          </Link>

          <Link to="/" onClick={handleSignOut}>
            
            sair
          </Link>
        </div>

        <Profile to="/profile">
          <img 
            src={avatarURL}
            alt={user.name}
          />
        </Profile>
      </Content>
    </Container>
  );
}