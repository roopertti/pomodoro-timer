import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-30px)'
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)'
  }
}

function Blockquote ({ quote, citeUrl, caption }) {
  return (
    <motion.figure
      className="blockquote"
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={{ duration: 1.5, ease: 'easeOut', delay: 1.5 }}
    >
      <blockquote cite={citeUrl}>
        <p>{`"${quote}"`}</p>
      </blockquote>
      <figcaption>
        {`-${caption}`}
      </figcaption>
    </motion.figure>
  )
}

Blockquote.propTypes = {
  quote: PropTypes.string,
  citeUrl: PropTypes.string,
  caption: PropTypes.string
}

export default Blockquote
