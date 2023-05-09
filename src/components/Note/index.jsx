import { Container } from './styles'
import { Tag } from '../Tag'
import { Rating } from '../Rating'

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Rating grade={data.rating} isBigSize={false} />

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => {
            const updatedTag = JSON.parse(tag.name)
            return <Tag key={updatedTag.id} title={updatedTag.value} />
          })}
        </footer>
      )}
    </Container>
  )
}
