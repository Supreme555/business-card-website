import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '../utils/constants'

export default function Custom404() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>404 - Страница не найдена | {siteConfig.title}</title>
        <meta name="description" content="Страница не найдена" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-gray-600 mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg 
              hover:bg-blue-700 transition-colors duration-200"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
} 