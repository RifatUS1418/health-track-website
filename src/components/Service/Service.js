import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div>
            <CardGroup>
                <Col>
                    <Card>
                        <div className="text-center mt-4">
                            <Card.Img variant="top" src={img} className="img-fluid card-img" />
                        </div>
                        <Card.Body>
                            <div className="description">
                                <Card.Title className="title-name">{name}</Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/details/${id}`}><button className="btn btn-primary">Show Details</button></Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </CardGroup>
        </div>
    );
};

export default Service;