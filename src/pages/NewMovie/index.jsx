import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";


export function NewMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/"> 
              <FiArrowLeft />
              Voltar
            </Link>
            
            <h1>Novo filme</h1>
          </header>

          <div className="infos">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>

          <Textarea placeholder="Observações" />

          <div>
            <h2>Marcadores</h2>

            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </div>
          
          <div className="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}