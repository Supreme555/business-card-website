import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CTAButton from '../components/CTAButton'
import { siteConfig } from '../utils/constants'

const pricingPlans = [
  {
    name: 'Базовый',
    price: '50,000',
    description: 'Идеально для небольших проектов',
    features: [
      'Одностраничный сайт',
      'Адаптивный дизайн',
      'Базовая SEO-оптимизация',
      'Срок разработки: 7 дней'
    ]
  },
  {
    name: 'Стандарт',
    price: '150,000',
    description: 'Оптимально для большинства проектов',
    features: [
      'До 5 страниц',
      'Адаптивный дизайн',
      'Расширенная SEO-оптимизация',
      'Интеграция с CMS',
      'Срок разработки: 14 дней'
    ]
  },
  {
    name: 'Премиум',
    price: 'От 300,000',
    description: 'Для крупных проектов',
    features: [
      'Неограниченное количество страниц',
      'Уникальный дизайн',
      'Полная SEO-оптимизация',
      'Интеграция любых сервисов',
      'Техническая поддержка',
      'Срок разработки: от 30 дней'
    ]
  }
]

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Цены - {siteConfig.title}</title>
        <meta name="description" content="Тарифы на услуги веб-разработки" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Тарифы</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-primary mb-4">
                {plan.price} ₸
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <CTAButton 
                text="Выбрать тариф"
                href="/contact"
                className="w-full text-center"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
} 