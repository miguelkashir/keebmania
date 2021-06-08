import { useState } from 'react';

import { Keyboard } from '../interfaces/index';
import { getKeyboards } from '../use-cases/keyboards';
import Layout from '../components/Layout';

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
        keyboards.map((keyboard: Keyboard) => (
          <ol key={keyboard.id}>
            <li>{keyboard.brand}</li>
            <li>{keyboard.model}</li>
            <li>{keyboard.layout}</li>
          </ol>
        ))
      ) : (
        <p>No keyboards loaded yet!</p>
      )}
    </Layout>
  );
};

export default IndexPage;
