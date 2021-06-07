import { useState } from 'react';

import Layout from '../components/Layout';
import { getKeyboards } from '../use-cases/keyboards';

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [keyboards, setKeyboards] = useState([]);

  const loadKeyboards = async () => {
    setIsLoading(true);
    const newKeyboards = await getKeyboards();
    setKeyboards(newKeyboards);
    setIsLoading(false);
  };

  const resetKeyboards = () => setKeyboards([]);

  return (
    <Layout title="Keebmania | Find your mechanical keyboard!">
      <h1>Keebmania</h1>
      <p>Find your mechanical keyboard!</p>

      <button disabled={isLoading} onClick={loadKeyboards}>
        Load keyboards
      </button>

      <button disabled={isLoading} onClick={resetKeyboards}>
        Reset keyboards
      </button>

      {keyboards.length ? (
        keyboards.map(keyboard => (
          <ul key={keyboard.id}>
            <ol>{keyboard.brand}</ol>
            <ol>{keyboard.model}</ol>
            <ol>{keyboard.layout}</ol>
          </ul>
        ))
      ) : (
        <p>No keyboards loaded yet!</p>
      )}
    </Layout>
  );
};

export default IndexPage;
