import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTASection from '../components/CTASection'
import { siteConfig, methodologyPoints } from '../utils/constants'

const skills = [
  {
    title: 'Критическое мышление',
    description: 'Развитие способности анализировать информацию, формулировать аргументированные выводы и принимать взвешенные решения.',
    icon: '🧠'
  },
  {
    title: 'Анализ текстов',
    description: 'Формирование навыков глубокого анализа литературных произведений, понимания авторского замысла и художественных приемов.',
    icon: '📖'
  },
  {
    title: 'Исследовательские навыки',
    description: 'Обучение методам поиска, обработки и систематизации информации, развитие научного подхода к изучению материала.',
    icon: '🔬'
  },
  {
    title: 'Коммуникативные навыки',
    description: 'Развитие умения четко и грамотно выражать свои мысли, аргументировать позицию и вести конструктивный диалог.',
    icon: '💭'
  }
]

export default function TeachingMethod() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Методика преподавания - {siteConfig.title}</title>
        <meta name="description" content="Узнайте о моем подходе к преподаванию русского языка и литературы" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-beige-light py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center text-gray-900 mb-6">
              Методика преподавания
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Мой подход основан на развитии критического мышления и аналитических способностей 
              через глубокое погружение в предмет и практическое применение знаний.
            </p>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Основные принципы работы
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {methodologyPoints.map((point, index) => (
                <div 
                  key={index}
                  className="p-6 bg-beige-light rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-beige-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Развиваемые навыки
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-sm flex items-start"
                >
                  <div className="text-4xl mr-4">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Результаты обучения
            </h2>
            <div className="max-w-3xl mx-auto bg-beige-light p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Высокие баллы на итоговых экзаменах (ЕНТ, IB DP)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Успешное поступление в престижные учебные заведения</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Развитие навыков, необходимых для дальнейшего обучения и карьеры</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Формирование устойчивого интереса к изучению русского языка и литературы</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CTASection 
          title="Хотите узнать больше о методике?"
          description="Запишитесь на пробное занятие и увидите мой подход к обучению на практике"
        />

      </main>

      <Footer />
    </div>
  )
} 