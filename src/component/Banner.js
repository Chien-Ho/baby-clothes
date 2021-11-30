import React from 'react'
import PropTypes from 'prop-types'

const Banner = ({ tittle, desc, children }) => {
    return (
        <div className="banner">
            <h1>{tittle}</h1>
            <p>{desc}</p>
            {children}
        </div>
    )
}

Banner.propTypes = {

}

export default Banner
