import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

export function NewMovie() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState({ id: '', value: '' });

  const navigate = useNavigate();

  async function handleNewMovie() {
    if (!title) {
      return alert('Digite o título do filme');
    }

    if (!rating) {
      return alert('Digite a nota do filme');
    }

    if (!isRatingValid) {
      return alert('A nota do filme deve ser entre 0 e 5');
    }

    if (tag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.'
      );
    }

    const updatedTags = tags.map((tag) => JSON.stringify(tag));

    await api.post('/notes', {
      title,
      description,
      rating,
      tags: updatedTags,
    });

    alert('Filme adicionado com sucesso!');
    navigate(-1);
  }

  function handleDiscardMovie() {
    const userConfirmation = confirm(
      'Todas as alterações serão perdidas... Tem certeza que deseja descartar as alterações?'
    );

    if (userConfirmation) {
      navigate(-1);
    }
  }

  const isRatingValid = rating >= 0 && rating <= 5;

  function handleAddTag() {
    if (!tag) {
      return alert('Você precisa colocar um gênero válido.');
    }

    setTags((prevTags) => [
      ...prevTags,
      { id: crypto.randomUUID(), value: tag },
    ]);
    setNewTag({ id: '', value: '' });
    setTag('');
  }

  function handleRemoveTag(tag) {
    setTags((prevState) => prevState.filter((item) => item.id !== tag.id));
  }

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título" />
      </Header>

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
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <div>
            <h2>Gêneros</h2>

            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag.value}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={(e) => setTag(e.target.value)}
                value={tag}
                onClick={handleAddTag}
              />
            </div>
          </div>

          <div className="buttons">
            <Button title="Excluir filme" onClick={handleDiscardMovie} />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
