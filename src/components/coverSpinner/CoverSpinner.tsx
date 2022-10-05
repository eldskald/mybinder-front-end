import { MoonLoader } from 'react-spinners';
import { Background } from './CoverSpinner.styles';

interface PropType {
  loading: boolean;
}

function CoverSpinner(props: PropType) {
  return (
    (props.loading ? (
      <Background>
        <MoonLoader
          size={150}
          color='var(--maincolor)'
        />
      </Background>
    ) : (
      <></>
    ))
  );
}

export default CoverSpinner;