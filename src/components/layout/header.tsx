"use client"

import { motion } from "framer-motion"
import logo from '@/logovinecas.jpg'; // A imagem é importada aqui

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-4 py-6 md:px-8 lg:px-12"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          {/* A variável 'logo' importada é usada aqui */}
          <img 
            src={logo} 
            alt="Logotipo da Vinecas Personalizados" 
            className="w-26 h-26 md:w-20 md:h-20 rounded-lg object-cover shadow-soft"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 text-center md:text-right ml-4"
        >
          {/* As classes de tamanho do texto foram ajustadas aqui */}
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-text tracking-tight">
            VINECAS
            <br className="block md:hidden" />
            <span className="ml-0 md:ml-4">PERSONALIZADOS</span>
          </h1>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
