import { css } from '@linaria/core';

import Home from 'pages/Home';

import Theme from './Theme';

export const font = css`
  :global() {
    @font-face {
      font-display: swap;
      font-family: 'Graphik';
      font-style: normal;
      font-stretch: normal;
      src: url('fonts/Graphik-Regular.woff') format('woff');
    }

    body {
      font-family: 'Graphik', 'Avenir Next', 'Helvetica Nueue', Helvetica,
        sans-serif;
    }
  }
`;

// Typically place global navigation and routing layer in here
export default function App() {
  return (
    <Theme>
      <Home />
    </Theme>
  );
}
