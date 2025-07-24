'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center py-6 px-12 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-extrabold rounded-xl px-6 py-2 text-xl shadow-lg"
        >
          A_UP
        </motion.div>
        <ul className="flex gap-10 font-semibold text-purple-900 text-base">
          {['Sobre', 'Soluções', 'Equipe', 'Contato'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
export default Navbar
