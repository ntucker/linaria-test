import { css } from 'linaria';
import { styled } from '@linaria/react'

import AssetPrice from './AssetPrice';

const margin = '8px';

const home = css`
  min-height: 100vh;
  margin: -${margin};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  text-align: center;
`;

const sizes = {
  large: '30px',
  medium: '24px',
  small: '15px',
}

const P = styled.p<{size: keyof typeof sizes}>`
  font-size: ${props => sizes[props.size]};
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export default function Home() {
  return (
    <div className={home}>
      <nav style={{ position: 'fixed', top: '18px' }}>Anansi</nav>
      <main>
        <P size="large">
          Congrats! You&apos;ve created linaria-test!
        </P>
        <P size="small">
          Check out the generated ReadMe for instructions on how to use this
          library
        </P>
        <P size="medium">
          <AssetPrice symbol="BTC" />
        </P>
      </main>
    </div>
  );
}
