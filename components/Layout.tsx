import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Keebmania' }: Props) => (
  <div className="d-flex flex-column justify-content-center align-items-center">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>

    <div className="container-fluid">{children}</div>

    <footer>
      <p>
        Made with ❤️ by{' '}
        <a target="_blank" href="https://twitter.com/miguelkashir">
          @miguelkashir
        </a>
      </p>
    </footer>
  </div>
);

export default Layout;
