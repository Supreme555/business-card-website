import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import { siteConfig, teachingExperience } from '../utils/constants'

export default function About() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Head>
        <title>Обо мне - {siteConfig.title}</title>
        <meta name="description" content="Узнайте больше о моем опыте преподавания русского языка и литературы" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Преподаватель русского языка и литературы
              </h1>
              <p className="text-xl text-gray-700">
                {teachingExperience.experience} опыта преподавания и подготовки учеников к экзаменам
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Аксана Сарсенова"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Аксана Сарсенова</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Я преподаватель с {teachingExperience.experience} стажем, выпускница {teachingExperience.education}.
                  </p>
                  <p>
                    {teachingExperience.mission}
                  </p>
                  <p>
                    Работаю с учениками {teachingExperience.targetAudience}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-beige-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Мой подход к обучению
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {teachingExperience.approach.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <p className="text-gray-700">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Профессиональное развитие
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-beige-50 rounded-lg p-8">
                {teachingExperience.certificates.map((cert, index) => (
                  <div key={index} className="flex items-center mb-4 last:mb-0">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-gray-700">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Хотите узнать больше?"
          description="Запишитесь на пробное занятие, и я расскажу подробнее о своем опыте и подходе к обучению"
        />
      </main>

      <Footer />
    </div>
  )
} 