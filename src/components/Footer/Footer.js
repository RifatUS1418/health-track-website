import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="pt-5 footer">
            <Container>
                <div className="row">
                    <div className="col-md-4 col-12 mx-3">
                        <h3 className="pb-4">Health Track Hospital</h3>
                        <p>Health Track Hospital is one of the leading private healthcare providers in Bangladesh having an impressive 'Reach', providing superior quality diagnostics services to its patients through a very efficient network of outreach centers and collection points located strategically across the greater Chittagong division.</p>
                    </div>
                    <div className="col-md-3 col-12 mx-3 footer-title">
                        <h4 className="pb-4">Recrmt Posts</h4>
                        <p>Image post Format</p>
                        <p>How to Live a Healthier Life</p>
                        <p>Image post Format</p>
                        <p>Gallary Post Format</p>
                        <p>The Hero in All Of Us</p>
                    </div>
                    <div className="col-md-3 col-12 mx-3 footer-title">
                        <h4 className="pb-4">Catagories</h4>
                        <p>Environment</p>
                        <p>Health Basics</p>
                        <p>Lifestyle</p>
                        <p>Motivation</p>
                        <p>Uncategorized</p>
                    </div>
                </div>
                <div className="mt-5 pb-3 pt-3 copy-right fw-bold">
                    <p>© Copyright 2021. All Rights Reserved by Health Track Hospital (Pte.) Ltd.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;