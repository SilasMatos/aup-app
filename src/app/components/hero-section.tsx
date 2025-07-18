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

function HeroSection() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <motion.section
      ref={heroRef}
      style={{ y, opacity }}
      className="flex flex-col items-center justify-center min-h-screen pt-20 pb-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20"
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-purple-900 text-center leading-tight z-10"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          className="inline-block bg-gradient-to-r from-purple-400 to-purple-600 text-white px-8 py-4 rounded-2xl align-middle shadow-2xl"
        >
          A_UP
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Amigos Unidos por um Propósito
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 text-xl md:text-2xl text-gray-700 text-center z-10 max-w-3xl"
      >
        Soluções inteligentes e acessíveis para pequenas e médias empresas.
        <br />
        Transformamos desafios em tecnologia simples, leve e eficiente.
        <br />
        <span className="font-bold text-purple-600">A_UP</span> — tecnologia que
        resolve, sem complicar.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-12 flex gap-6 z-10"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contato"
          className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition text-lg flex items-center gap-2"
        >
          Fale com a gente <ArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#solucoes"
          className="border-2 border-purple-400 text-purple-700 font-semibold px-10 py-4 rounded-full bg-white hover:bg-purple-50 transition text-lg"
        >
          Ver Soluções
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection
