import { Entry } from 'utils/types';
import { Spacer } from './EntrySpace.styles';

function EntrySpace(props: { entry: Entry }) {
  const { space } = props.entry;
  return (
    <>
      asldfjasd
      <Spacer length={`${space}px`} />
      asdlkfjasfldk
    </>
  );
}

export default EntrySpace;