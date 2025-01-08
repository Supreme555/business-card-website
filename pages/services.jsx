import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import { siteConfig, services } from '../utils/constants'
import CTASection from '../components/CTASection'

const coursePricing = [
  {
    name: 'Пробное занятие',
    price: '3,000 ₸',
    duration: '40 минут',
    description: 'Знакомство с методикой преподавания и определение уровня ученика',
    features: [
      'Диагностика уровня знаний',
      'Разбор пробного задания',
      'Рекомендации по обучению',
      'Скидка 50% от обычной стоимости'
    ]
  },
  {
    name: 'Индивидуальное занятие',
    price: '8,000 ₸',
    duration: '90 минут',
    description: 'Персональное занятие с учетом уровня и целей ученика',
    features: [
      'Индивидуальная программа',
      'Интерактивные материалы',
      'Домашние задания',
      'Онлайн-поддержка'
    ]
  },
  {
    name: 'Блок из 8 занятий',
    price: '60,000 ₸',
    duration: '90 минут каждое',
    description: 'Оптимальный вариант для регулярных занятий',
    features: [
      'Экономия 7,500 ₸',
      'Гибкий график',
      'Полное методическое сопровождение',
      'Регулярная обратная связь'
    ]
  }
]

export default function Services() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Услуги и цены - {siteConfig.title}</title>
        <meta name="description" content="Услуги репетитора русского языка и литературы, подготовка к экзаменам" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-beige-light py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-center text-gray-900 mb-6">
              Услуги и цены
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Индивидуальные занятия по русскому языку и литературе для учеников 7-12 классов.
              Подготовка к ЕНТ и IB DP экзаменам.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Направления подготовки
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-beige-light rounded-lg hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <CTAButton 
                    text="Записаться" 
                    isWhatsApp={true}
                    className="text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-beige-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Стоимость занятий
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coursePricing.map((plan, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {plan.price}
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      Длительность: {plan.duration}
                    </div>
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <CTAButton 
                      text="Записаться" 
                      isWhatsApp={true}
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Format Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Формат занятий
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-beige-light p-8 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Онлайн через Zoom</span>
                      <p className="text-gray-600">Занятия проводятся в удобное для вас время</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Длительность 90 минут</span>
                      <p className="text-gray-600">Оптимальное время для усвоения материала</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Индивидуальный подход</span>
                      <p className="text-gray-600">Программа адаптируется под ваши цели и уровень</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className="font-bold">Домашние задания</span>
                      <p className="text-gray-600">Закрепление материала и отработка навыков</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Готовы начать обучение?"
          description="Запишитесь на пробное занятие со скидкой 50% и убедитесь в эффективности моей методики"
        />

      </main>

      <Footer />
    </div>
  )
} 