import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstTable() {
  return (
    <Layout>
      <Head>
        <title>First Table</title>
      </Head>
      <h1>First Table</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
