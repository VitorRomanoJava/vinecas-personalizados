"use client"

import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-4 py-6 md:px-8 lg:px-12"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-muted rounded-lg flex items-center justify-center shadow-soft">
            <span className="text-sm md:text-base font-medium text-muted-foreground">Logo</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 text-center md:text-right ml-4"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-text tracking-tight">
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