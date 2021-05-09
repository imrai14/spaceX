import React,  { useState } from 'react';
import '../styles/Image.css';

const Image = ({ src, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <React.Fragment>
            <img
                src={ src }
                alt={ alt }
                width="200px"
                className={ `smooth-image image-${imageLoaded ? 'visible' : 'hidden'
                    }` }
                onLoad={ () => setImageLoaded(true) }
            />
            {!imageLoaded && (
                <div className="smooth-preloader">
                    <span className="loader" />
                </div>
            ) }
        </React.Fragment>

    )
}

export default Image;