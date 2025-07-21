'use client'
import Image from 'next/image'
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
  Heart,
  Sparkles,
  Github,
  Linkedin
} from 'lucide-react'

function TeamSection() {
  const ref = useRef(null)
  const parallaxRef = useRef(null)
  const isInView = useInView(ref, { once: true })

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start']
  })

  // Transformações parallax para diferentes camadas
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const overlayY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const particlesY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  const FloatingParticle = ({ delay = 0, className = '' }) => (
    <motion.div
      className={`absolute w-1 h-1 bg-white/30 rounded-full ${className}`}
      style={{ y: particlesY }}
      animate={{
        y: [0, -100, 0],
        x: [0, 50, -30, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  )

  return (
    <section
      id="equipe"
      ref={parallaxRef}
      className="relative min-h-screen overflow-hidden"
    >
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] team-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/75 to-pink-900/80 z-10">
          <div className="absolute inset-0 opacity-10 z-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <motion.div
            className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-24 h-24 border-2 border-white/15 rotate-45"
            animate={{ rotate: [45, 225, 45], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-2xl"
            animate={{ rotate: [0, 180, 360], x: [0, 50, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Filtro adicional com blur suave */}
      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 bg-gradient-to-b from-purple-600/30 via-indigo-600/20 to-purple-800/40 backdrop-blur-[1px] z-20"
      />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.4}
            className={`top-${Math.floor(Math.random() * 80) + 10}% left-${
              Math.floor(Math.random() * 80) + 10
            }%`}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <motion.div style={{ y: contentY }} className="relative z-40 py-20 px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge decorativo */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8"
              initial={{ y: -30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Conheça nossa equipe
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Nossa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                Equipe
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Conheça os{' '}
              <span className="font-semibold text-pink-300">
                talentos criativos
              </span>{' '}
              que fazem a magia acontecer
            </motion.p>

            {/* Elementos decorativos */}
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              {[Heart, Sparkles, Star].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 text-pink-300"
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                >
                  <Icon />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Elementos flutuantes adicionais */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border border-white/20 rounded-full z-30"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ y: overlayY }}
      />

      <motion.div
        className="absolute bottom-32 right-1/4 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm z-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ y: contentY }}
      />
    </section>
  )
}

export default TeamSection
