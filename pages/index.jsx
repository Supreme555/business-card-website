import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import CTASection from '../components/CTASection'
import { siteConfig, teachingExperience, services } from '../utils/constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Head>
        <title>{siteConfig?.title}</title>
        <meta name="description" content={siteConfig?.description} />
      </Head>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-beige-50 to-beige-100 overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-200/20 to-primary-300/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-200/20 to-primary-300/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative max-w-7xl mx-auto pt-20 pb-28 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
                <span className="block mb-2">Репетитор русского языка</span>
                <span className="block text-primary-600">и литературы</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
                {teachingExperience?.mission}
              </p>
              <CTAButton 
                text="Записаться на пробное занятие"
                isWhatsApp={true}
                className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-200"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Направления подготовки</h2>
              <p className="text-xl text-gray-600">
                Индивидуальный подход к каждому ученику с учетом его целей и уровня подготовки
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services?.map((service, index) => (
                <div
                  key={index}
                  className="bg-beige-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-primary-100 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                    <span className="text-3xl">{service.icon || '📚'}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Длительность: {service.duration}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Стоимость: {service.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 bg-beige-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Опыт и квалификация</h2>
              <p className="text-xl text-gray-600">
                {teachingExperience?.experience} преподавательского опыта и постоянное профессиональное развитие
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Образование</h3>
                </div>
                <p className="text-lg text-gray-700">{teachingExperience?.education}</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Сертификаты</h3>
                </div>
                <ul className="space-y-4">
                  {teachingExperience?.certificates?.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
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