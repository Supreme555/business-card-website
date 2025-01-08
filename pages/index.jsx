import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import CTASection from '../components/CTASection'
import { siteConfig, teachingExperience, services } from '../utils/constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{siteConfig?.title}</title>
        <meta name="description" content={siteConfig?.description} />
      </Head>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mb-8">
                  <span className="block">Репетитор русского языка</span>
                  <span className="block text-primary-600">и литературы</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  {teachingExperience?.mission}
                </p>
                <div className="space-x-4">
                  <CTAButton 
                    text="Записаться на пробное занятие"
                    isWhatsApp={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Услуги</h2>
              <p className="mt-4 text-lg text-gray-600">
                Индивидуальный подход к каждому ученику
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services?.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>Длительность: {service.duration}</p>
                    <p>Стоимость: {service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Опыт и образование</h2>
              <p className="mt-4 text-lg text-gray-600">
                {teachingExperience?.experience} преподавательского опыта
              </p>
            </div>

            <div className="mt-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Образование</h3>
                  <p className="text-gray-600">{teachingExperience?.education}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Сертификаты</h3>
                  <ul className="space-y-2">
                    {teachingExperience?.certificates?.map((cert, index) => (
                      <li key={index} className="text-gray-600">{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Готовы начать обучение?"
          description="Запишитесь на пробное занятие и сделайте первый шаг к успешному освоению русского языка"
        />

      </main>

      <Footer />
    </div>
  )
} 