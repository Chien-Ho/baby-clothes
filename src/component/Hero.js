import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ hero, children }) => {
    return (
        <div>
            <header className={hero}>{children}</header>
        </div>
    )
}

Hero.propTypes = {

}

export default Hero
