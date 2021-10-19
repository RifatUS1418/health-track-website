import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = useServices();
    console.log(services);
    return (
        <div className="my-5">
            <h1 className="my-5 text-center heading">Our Services what we are offering</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;