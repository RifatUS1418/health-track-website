import React from 'react';
import notFound from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notFound} alt="" className="img-fluid" />
        </div>
    );
};

export default NotFound;