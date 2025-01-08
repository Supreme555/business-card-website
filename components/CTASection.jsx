import CTAButton from './CTAButton'

export default function CTASection({ 
  title = "Готовы начать обучение?",
  description = "Запишитесь на пробное занятие со скидкой 50% и убедитесь в эффективности моей методики",
  buttonText = "Записаться на пробное занятие",
  className = ""
}) {
  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-white rounded-full translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            {description}
          </p>
          <CTAButton 
            text={buttonText}
            isWhatsApp={true}
            className="bg-beige-50 text-primary-600 hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl text-lg px-8 py-4 border-2 border-white/20"
          />
        </div>
      </div>
    </section>
  )
} 