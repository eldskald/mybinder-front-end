import { Entry } from 'utils/types';
import {
  TitleWrapper,
  TextWrapper
} from './EntryText.style';

function EntryText(props: { entry: Entry }) {
  const { title, text } = props.entry;
  return (
    <>
      <TitleWrapper>{title}</TitleWrapper>
      <TextWrapper>{text}</TextWrapper>
    </>
  );
}

export default EntryText;