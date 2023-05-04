import { Link } from "react-router-dom";
import { FiArrowLeft, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/shuharib0t.png" 
            alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input 
              id="avatar"
              type="file" 
            />
          </label>
        </Avatar>

        <Input
          placeholder="Nome do usuário"
          type="text"
        />

        <Input
          placeholder="E-mail"
          type="text"
        />

        <Input
          placeholder="Senha atual"
          type="password"
        />

        <Input
          placeholder="Nova senha"
          type="password"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}