import { Entry } from 'utils/types';
import { ImageWrapper } from './EntryImage.styles';

function EntryImage(props: { entry: Entry }) {
  const { imageUrl } = props.entry;
  return (
    <ImageWrapper src={imageUrl} />
  );
}

export default EntryImage;