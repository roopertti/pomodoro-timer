import React from 'react'
import PropTypes from 'prop-types'

function Blockquote ({ quote, citeUrl, caption }) {
  return (
    <figure className="blockquote">
      <blockquote cite={citeUrl}>
        <p>{`"${quote}"`}</p>
      </blockquote>
      <figcaption>
        {`-${caption}`}
      </figcaption>
    </figure>
  )
}

Blockquote.propTypes = {
  quote: PropTypes.string,
  citeUrl: PropTypes.string,
  caption: PropTypes.string
}

export default Blockquote
