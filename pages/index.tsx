import { useState } from 'react';
import Image from 'next/image';

import { Keyboard } from '../interfaces/index';
import { getKeyboards } from '../use-cases/keyboards';
import Layout from '../components/Layout';
import { getImagePath } from '../utils/getImagePath';

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
      <section className="d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Keebmania</h1>
          <p>Find your mechanical keyboard!</p>
        </div>

        <div className="d-flex flex-row">
          <button
            type="button"
            className="btn btn-primary"
            disabled={isLoading}
            onClick={loadKeyboards}
          >
            Load keyboards
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            disabled={isLoading}
            onClick={resetKeyboards}
          >
            Reset keyboards
          </button>
        </div>

        <div className="row">
          {keyboards.length ? (
            keyboards.map((keyboard: Keyboard) => (
              <div
                className="card col"
                style={{ margin: '1rem' }}
                key={keyboard.id}
              >
                <Image
                  className="card-img-top"
                  src={getImagePath(keyboard.brand, keyboard.model)}
                  alt="Picture of the author"
                  width="100%"
                  height="inherit"
                />
                <div className="card-body">
                  <h5 className="card-title">{`${keyboard.brand} ${keyboard.model}`}</h5>
                  <p className="card-text">{keyboard.layout}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col">
              <p>No keyboards loaded yet!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
