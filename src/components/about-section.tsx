'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import {
  Heart,
  Target,
  Zap,
  CheckCircle,
  Users,
  Code,
  Star,
  Sparkles
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '50+', label: 'Projetos Entregues' },
  { number: '30+', label: 'Clientes Satisfeitos' },
  { number: '3+', label: 'Anos de Experiência' },
  { number: '100%', label: 'Dedicação' }
]

const valores = [
  {
    icon: Target,
    title: 'Foco no Cliente',
    desc: 'Suas necessidades são nossa prioridade absoluta em cada projeto'
  },
  {
    icon: Zap,
    title: 'Agilidade',
    desc: 'Entregas rápidas sem comprometer a qualidade e excelência'
  },
  {
    icon: CheckCircle,
    title: 'Qualidade',
    desc: 'Excelência em cada detalhe dos projetos que desenvolvemos'
  }
]

// Componente para formas geométricas flutuantes
const FloatingShape = ({
  className,
  children
}: {
  className: string
  children?: React.ReactNode
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }}
  >
    {children}
  </motion.div>
)

// Componente para partículas animadas
const AnimatedParticle = ({
  delay = 0,
  className = ''
}: {
  delay?: number
  className?: string
}) => (
  <motion.div
    className={`absolute w-2 h-2 bg-purple-400 rounded-full ${className}`}
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

function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel')
    const totalWidth = horizontalRef.current
      ? horizontalRef.current.scrollWidth
      : 0

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: 1 / (sections.length - 1)
      }
    })

    // Animação das formas de fundo
    gsap.to('.floating-bg', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })

    gsap.to('.pulse-shape', {
      scale: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })
  }, [])

  return (
    <section
      id="sobre"
      className="relative bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 overflow-hidden"
    >
      <div ref={containerRef} className="overflow-hidden w-full h-screen">
        <div ref={horizontalRef} className="flex h-full w-[300vw] space-x-0">
          {/* Painel 1 - Intro com formas geométricas */}
          <div className="panel w-screen flex flex-col justify-center items-center px-16 relative overflow-hidden">
            {/* Formas de fundo animadas */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Círculos grandes */}
              <FloatingShape className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-xl" />
              <FloatingShape className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-2xl" />

              {/* Formas geométricas */}
              <motion.div
                className="floating-bg absolute top-1/4 right-1/4 w-24 h-24 border-4 border-purple-300/40 rotate-45"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="floating-bg absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-lg"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* Partículas flutuantes */}
              {Array.from({ length: 8 }).map((_, i) => (
                <AnimatedParticle
                  key={i}
                  delay={i * 0.8}
                  className={`top-${Math.random() * 100}% left-${
                    Math.random() * 100
                  }%`}
                />
              ))}
            </div>

            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'backOut' }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  Conheça nossa empresa
                </span>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Sobre a A_UP
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Somos uma empresa{' '}
                <span className="font-semibold text-purple-700">
                  jovem e dinâmica
                </span>
                , formada por amigos apaixonados por tecnologia. Nossa missão é
                <span className="font-semibold text-indigo-700">
                  {' '}
                  democratizar o acesso à tecnologia
                </span>
                de qualidade para pequenas e médias empresas.
              </motion.p>

              <motion.div
                className="flex justify-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[Users, Code, Star].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-purple-200/50"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-5 h-5 text-purple-600" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Painel 2 - História + Stats com layout melhorado */}
          <div className="panel w-screen flex items-center px-16 relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-100">
            {/* Background com formas */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="pulse-shape absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-300/20 to-purple-300/20 rounded-full blur-2xl"
                animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div key={i} className="border border-purple-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-purple-900 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Nossa História
                </motion.h3>

                <motion.p
                  className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Nascemos da união de amigos que compartilham uma visão comum:
                  tornar a tecnologia acessível e eficiente para todos.
                  Começamos como um pequeno grupo de desenvolvedores e hoje
                  somos uma equipe completa, pronta para enfrentar qualquer
                  desafio tecnológico.
                </motion.p>

                <motion.div
                  className="flex items-center gap-4 mb-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-purple-700 font-semibold text-lg">
                    Feito com paixão e dedicação
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center border border-white/50 hover:-translate-y-2 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.3 + 0.1 * i,
                        type: 'spring',
                        stiffness: 200
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Painel 3 - Valores com design aprimorado */}
          <div className="panel w-screen flex flex-col justify-center px-16 relative overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100">
            {/* Background animado */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, -50, 0],
                  y: [0, -50, 50, 0],
                  scale: [1, 1.2, 0.8, 1]
                }}
                transition={{ duration: 20, repeat: Infinity }}
              />

              {/* Formas geométricas decorativas */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-8 h-8 border-2 border-purple-300/40 ${
                    i % 2 === 0 ? 'rounded-full' : 'rotate-45'
                  }`}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                  animate={{
                    rotate: [0, 360],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">
                  Nossos Valores
                </span>
              </motion.h3>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {valores.map((value, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:-translate-y-4 transition-all duration-500 relative overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                    >
                      {/* Gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="w-10 h-10 text-white" />
                      </motion.div>

                      <h4 className="text-2xl font-bold text-purple-900 mb-4 relative z-10">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                        {value.desc}
                      </p>

                      {/* Decorative elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-4 h-4 bg-purple-300 rounded-full opacity-30"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
