'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Users, Heart, Sparkles, Star } from 'lucide-react'

const ParallaxTeamSection = () => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  const isInView = useInView(contentRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-[150%] -top-[25%]"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
              minHeight: '150vh'
            }}
          />
        </motion.div>
      </div>

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-purple-900/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 via-transparent to-purple-900/20 z-20" />

      {/* Main Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-40 py-20 px-12 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
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

            {/* Main Title */}
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

            {/* Description */}
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

            {/* Animated Icons */}
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

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-pink-400/10 rounded-full blur-xl z-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/10 rounded-full blur-xl z-30"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default ParallaxTeamSection
