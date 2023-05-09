import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'

import { Container, Content, Wrapper, NewMovie } from './styles'

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <Wrapper>
        <h1>Meus filmes</h1>

        <NewMovie to="/new">
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </Wrapper>

      <Content>
        {movies.map((movie) => (
          <Note
            key={String(movie.id)}
            data={movie}
            onClick={() => handleDetails(movie.id)}
          />
        ))}
      </Content>
    </Container>
  )
}
