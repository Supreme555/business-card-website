import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { siteConfig } from '../utils/constants'

export default function Contact() {
  const contactMethods = [
    siteConfig?.whatsapp && {
      title: 'WhatsApp',
      value: siteConfig.whatsapp,
      href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`,
      type: 'whatsapp',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    siteConfig?.email && {
      title: 'Email',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      type: 'email',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    siteConfig?.phone && {
      title: 'Телефон',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
      type: 'phone',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    siteConfig?.location && {
      title: 'Адрес',
      value: siteConfig.location,
      type: 'location',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-beige-50">
      <Head>
        <title>Контакты | {siteConfig?.title}</title>
        <meta name="description" content="Свяжитесь со мной для записи на занятия или получения дополнительной информации." />
      </Head>

      <Header />

      <main className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-brown-900 sm:text-4xl mb-4">
              Свяжитесь со мной
            </h1>
            <p className="text-lg text-brown-600">
              Выберите удобный способ связи или заполните форму ниже
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="card text-center"
              >
                <div className="flex justify-center text-primary-500 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-medium text-brown-800 mb-2">
                  {method.title}
                </h3>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.type === 'whatsapp' ? '_blank' : undefined}
                    rel={method.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-brown-600">{method.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 