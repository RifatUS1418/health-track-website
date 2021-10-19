import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { img, name, specialist, degree } = doctor;
    return (
        <div className="my-3">
            <Col>
                <Card>
                    <div className="text-center mt-4">
                        <Card.Img variant="top" src={img} className="card-image" />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {degree}
                        </Card.Text>
                        <Card.Text>
                            Specialish: {specialist}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Doctor;