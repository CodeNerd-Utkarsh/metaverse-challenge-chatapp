import Head from 'next/head'
import Login from '../components/Login'
export default function Home() {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return <Login />
  }
  return (
    <div div className="h-screen" >
      <Head>
        <title>MetaVerse ChatApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hello world</h1>

    </div>

  )
}
