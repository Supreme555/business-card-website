import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { siteConfig } from '../utils/constants'

export default function About() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Обо мне - {siteConfig.title}</title>
        <meta name="description" content="Узнайте больше о моем опыте и навыках" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/profile.jpg"
              alt="Профессиональное фото"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-6">Обо мне</h1>
            <p className="text-lg text-gray-700 mb-4">
              Привет! Я профессиональный разработчик с богатым опытом в создании 
              современных веб-приложений. Моя цель - помогать бизнесам и частным 
              лицам реализовывать их идеи в цифровом пространстве.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Я специализируюсь на создании:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Современных веб-приложений</li>
              <li>Адаптивных веб-сайтов</li>
              <li>Пользовательских интерфейсов</li>
              <li>Оптимизированных решений</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 