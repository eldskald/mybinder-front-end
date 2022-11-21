import { Entry } from 'utils/types';
import {
  Container,
  Title,
  InnerContainer,
  ImgAndDescWrapper,
  TextWrapper
} from './EntryProject.styles';

function EntryThumbnail(props: { entry: Entry }) {
  const { title, description, text, imageUrl, sourceUrl } = props.entry;
  return (
    <Container>
      <a href={sourceUrl} target='_blank'>
        <Title>{title}</Title>
        <InnerContainer>
          <ImgAndDescWrapper>
            <img src={imageUrl} alt={title} />
            <p>{description}</p>
          </ImgAndDescWrapper>
          <TextWrapper>{text}</TextWrapper>
        </InnerContainer>
      </a>
    </Container>
  );
}

export default EntryThumbnail;