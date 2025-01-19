import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import CTASection from '../components/CTASection'
import { siteConfig, teachingExperience, services } from '../utils/constants'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{siteConfig?.title}</title>
        <meta name="description" content={siteConfig?.description} />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-white pt-24 pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#D2B48C_0%,_transparent_35%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#D2B48C_0%,_transparent_35%)]"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
                <span className="block">Репетитор русского</span>
                <span className="block">языка и литературы</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12">
                Развиваю аналитические и коммуникативные навыки старшеклассников через различные методы обучения
              </p>
              <CTAButton
                text="Записаться на пробное занятие"
                isWhatsApp={true}
                className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#D2B48C]/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Направления подготовки</h2>
              <p className="mt-4 text-lg text-gray-600">
                Индивидуальный подход к каждому ученику
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services?.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl border border-[#D2B48C]/20 hover:border-[#D2B48C]/50 transition-all duration-300"
                >
                  <div className="mb-6 text-3xl">{service.icon || '📚'}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p className="flex items-center">
                      <svg className="w-4 h-4 text-[#D2B48C] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-4 h-4 text-[#D2B48C] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title="Готовы начать обучение?"
          description="Первое пробное занятие длительностью 40 минут – со скидкой 50%!"
        />
      </main>

      <Footer />
    </div>
  )
} 