import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types'

function AppImage({ src, alt, mediaDetails, imgClass }) {

    let { height, width } = mediaDetails
    return (
        <Image className={imgClass} src={src} alt={alt} placeholder="empty"

            width={width} height={height}
        />
    )
}

AppImage.prototype = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
}

export default AppImage
