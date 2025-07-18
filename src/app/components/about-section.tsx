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
function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    { number: '50+', label: 'Projetos Entregues' },
    { number: '30+', label: 'Clientes Satisfeitos' },
    { number: '3+', label: 'Anos de Experiência' },
    { number: '100%', label: 'Dedicação' }
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Sobre a A_UP
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa jovem e dinâmica, formada por amigos apaixonados
            por tecnologia. Nossa missão é democratizar o acesso à tecnologia de
            qualidade para pequenas e médias empresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-900 mb-6">
              Nossa História
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Nascemos da união de amigos que compartilham uma visão comum:
              tornar a tecnologia acessível e eficiente para todos. Começamos
              como um pequeno grupo de desenvolvedores e hoje somos uma equipe
              completa, pronta para enfrentar qualquer desafio tecnológico.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-purple-700 font-semibold">
                Feito com paixão e dedicação
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white p-12 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Foco no Cliente',
                desc: 'Suas necessidades são nossa prioridade'
              },
              {
                icon: Zap,
                title: 'Agilidade',
                desc: 'Entregas rápidas sem comprometer a qualidade'
              },
              {
                icon: CheckCircle,
                title: 'Qualidade',
                desc: 'Excelência em cada projeto que desenvolvemos'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-purple-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default AboutSection
