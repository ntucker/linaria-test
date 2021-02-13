import Home from 'pages/Home';
import 'style/main.scss';

import Theme from './Theme';

// Typically place global navigation and routing layer in here
export default function App() {
  return (
    <Theme>
      <Home />
    </Theme>
  );
}
