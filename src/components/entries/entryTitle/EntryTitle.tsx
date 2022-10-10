import { Entry } from 'utils/types';
import {
  Container,
  Title,
  Subtitle
} from './EntryTitle.styles'

function EntryTitle(props: { entry: Entry }) {
  const { title, description } = props.entry;
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
    </Container>
  );
}

export default EntryTitle;