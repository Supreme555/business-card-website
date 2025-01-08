import { useState } from 'react'
import { siteConfig } from '../utils/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения'
    } else if (!/^(\+7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона'
    }

    if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Введите корректный email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Сообщение обязательно для заполнения'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }
    
    try {
      // Формируем сообщение для WhatsApp
      const message = `
Имя: ${formData.name}
Телефон: ${formData.phone}
${formData.email ? `Email: ${formData.email}\n` : ''}
Сообщение: ${formData.message}
      `.trim()

      // Открываем WhatsApp с предзаполненным сообщением
      if (siteConfig?.whatsapp) {
        window.open(
          `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`,
          '_blank'
        )
        
        // Очищаем форму после успешной отправки
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setErrors({ submit: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Очищаем ошибку поля при изменении
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brown-700">
            Имя *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'border-red-300' : ''}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brown-700">
            Телефон *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            className={errors.phone ? 'border-red-300' : ''}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brown-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'border-red-300' : ''}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brown-700">
            Сообщение *
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'border-red-300' : ''}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {errors.submit && (
          <div className="text-sm text-red-600 text-center">{errors.submit}</div>
        )}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
          </button>
        </div>

        <p className="text-sm text-brown-500 text-center">
          * Обязательные поля
        </p>
      </div>
    </form>
  )
} 