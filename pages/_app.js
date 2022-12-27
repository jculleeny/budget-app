import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <motion.div>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
