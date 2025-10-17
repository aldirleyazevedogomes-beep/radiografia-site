import Head from 'next/head'
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Radiografia da prisão de um Deputado</title>
        <meta name="description" content="Radiografia da prisão de um Deputado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="pt-8 pb-16">{children}</main>
        <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-8">
          <p>© {new Date().getFullYear()} Radiografia da Prisao de um Deputado</p>
          <p className="text-sm"> Conteudo de analise juridica. Nao constitui acusacao formal</p>
        </footer>
      </div>
    </>
  )
}
