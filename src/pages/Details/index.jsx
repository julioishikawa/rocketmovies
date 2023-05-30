import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiClock } from "react-icons/fi";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import moment from "moment-timezone";

import avatarPlaceholder from "../../assets/Missing_avatar.svg";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { Container, Content, UserInfo } from "./styles";

export function Details() {
  const [data, setData] = useState({});

  const params = useParams();

  const { user } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const formattedDate = moment
    .utc(data.updated_at)
    .tz("America/Sao_Paulo")
    .format("DD/MM/YYYY HH:mm:ss");

  async function handleRemove() {
    const confirm = window.confirm("Deseja remover o filme?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <div className="buttons">
              <button type="button" onClick={handleBack}>
                <FiArrowLeft />
                Voltar
              </button>

              <Link onClick={handleRemove}> Excluir nota</Link>
            </div>

            <div>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>

            <div className="details">
              <UserInfo to="/profile">
                <img src={avatarURL} alt={user.name} />

                <span>Por {user.name}</span>
              </UserInfo>

              <FiClock />

              <span>{formattedDate}</span>
            </div>

            {data.tags && (
              <div className="tags">
                {data.tags.map((tag) => {
                  const updatedTag = JSON.parse(tag.name);
                  return <Tag key={updatedTag.id} title={updatedTag.value} />;
                })}
              </div>
            )}

            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
