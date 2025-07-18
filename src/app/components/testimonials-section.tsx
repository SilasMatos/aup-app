'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import {
  ChevronRight,
  Code,
  Smartphone,
  Globe,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Heart
} from 'lucide-react'

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      text: 'A A_UP transformou nossa presença digital completamente. O resultado superou todas as expectativas!',
      author: 'Carlos Mendes',
      company: 'Tech Solutions',
      rating: 5
    },
    {
      text: 'Profissionais incríveis! Entregaram nosso app no prazo e com qualidade excepcional.',
      author: 'Fernanda Lima',
      company: 'StartupXYZ',
      rating: 5
    },
    {
      text: 'O suporte é fantástico e as soluções são exatamente o que precisávamos para crescer.',
      author: 'Roberto Alves',
      company: 'Comércio Digital',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            O que dizem nossos clientes
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-purple-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
