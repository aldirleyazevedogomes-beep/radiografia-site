import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Radiografia da prisão de um Deputado</title>
        <meta name="description" content="Radiografia da prisão de um Deputado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        {children}
      </div>
    </>
  )
}