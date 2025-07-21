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

function SolutionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const solutions = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description:
        'Sites e aplicações web modernas, responsivas e otimizadas para seu negócio.',
      features: [
        'React & Next.js',
        'Design Responsivo',
        'SEO Otimizado',
        'Performance'
      ]
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description:
        'Apps nativos e híbridos para iOS e Android com a melhor experiência do usuário.',
      features: ['React Native', 'Flutter', 'UI/UX Design', 'App Store']
    },
    {
      icon: Globe,
      title: 'Soluções Cloud',
      description:
        'Infraestrutura em nuvem escalável e segura para sua empresa crescer.',
      features: ['AWS/Azure', 'DevOps', 'Monitoramento', 'Backup']
    }
  ]

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Nossas Soluções
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços tecnológicos para
            impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <solution.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-700 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition text-lg"
          >
            Ver Todos os Serviços
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection
