import { Provider, defaultTheme } from '@adobe/react-spectrum';
import TruthyChain from './components/TruthyChain';

function App() {
  const { title } = document;
  return (
    <Provider theme={defaultTheme}>
      <TruthyChain />
    </Provider>
  );
}

export default App;
