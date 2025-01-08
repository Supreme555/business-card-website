import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import { siteConfig, faq } from '../utils/constants'

const examTips = [
  {
    title: 'Планирование подготовки',
    tips: [
      'Составьте четкий график подготовки',
      'Разделите материал на manageable chunks',
      'Выделите время на повторение',
      'Регулярно делайте практические задания'
    ]
  },
  {
    title: 'Работа с текстом',
    tips: [
      'Внимательно читайте задание',
      'Выделяйте ключевые слова',
      'Составляйте план ответа',
      'Проверяйте написанное'
    ]
  },
  {
    title: 'Эффективное обучение',
    tips: [
      'Делайте короткие перерывы',
      'Чередуйте виды деятельности',
      'Используйте мнемотехники',
      'Практикуйте активное повторение'
    ]
  }
]

const commonMistakes = [
  {
    category: 'Пунктуация',
    mistakes: [
      'Запятая перед "как"',
      'Знаки препинания в сложных предложениях',
      'Обособление причастных оборотов',
      'Знаки при прямой речи'
    ]
  },
  {
    category: 'Орфография',
    mistakes: [
      'Правописание Н и НН',
      'Слитное и раздельное написание НЕ',
      'Безударные гласные в корне',
      'Чередующиеся гласные'
    ]
  },
  {
    category: 'Анализ текста',
    mistakes: [
      'Неверное определение проблемы текста',
      'Отсутствие аргументации',
      'Нарушение логики рассуждения',
      'Неправильное определение средств выразительности'
    ]
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">{question}</span>
          <svg
            className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Полезные материалы - {siteConfig.title}</title>
        <meta name="description" content="Полезные материалы и советы по подготовке к экзаменам" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-beige-light py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center text-gray-900 mb-6">
              Полезные материалы
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Здесь собраны полезные советы, рекомендации и ответы на часто задаваемые вопросы,
              которые помогут вам в подготовке к экзаменам.
            </p>
          </div>
        </section>

        {/* Exam Tips Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Советы по подготовке к экзаменам
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {examTips.map((section, index) => (
                <div 
                  key={index}
                  className="bg-beige-light p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section className="py-16 bg-beige-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Типичные ошибки
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {commonMistakes.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.mistakes.map((mistake, mistakeIndex) => (
                      <li key={mistakeIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Часто задаваемые вопросы
            </h2>
            <div className="max-w-3xl mx-auto">
              {faq.map((item, index) => (
                <FAQItem 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Остались вопросы?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Запишитесь на пробное занятие, и я отвечу на все ваши вопросы
            </p>
            <CTAButton 
              text="Записаться на пробное занятие" 
              isWhatsApp={true}
              className="bg-white text-primary hover:bg-gray-100"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 