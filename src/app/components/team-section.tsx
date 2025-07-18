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
function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const team = [
    {
      name: 'João Silva',
      role: 'CEO & Full Stack Developer',
      bio: 'Apaixonado por tecnologia e liderança, com 5+ anos de experiência.',
      avatar: '👨‍💼'
    },
    {
      name: 'Maria Santos',
      role: 'UX/UI Designer',
      bio: 'Criativa e focada em experiências incríveis para o usuário.',
      avatar: '👩‍🎨'
    },
    {
      name: 'Pedro Costa',
      role: 'DevOps Engineer',
      bio: 'Especialista em infraestrutura e automação de processos.',
      avatar: '👨‍💻'
    },
    {
      name: 'Ana Oliveira',
      role: 'Mobile Developer',
      bio: 'Desenvolvedora mobile com expertise em React Native e Flutter.',
      avatar: '👩‍💻'
    }
  ]

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça os amigos que fazem a magia acontecer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-4">{member.avatar}</div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
