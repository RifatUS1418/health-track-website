import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from './../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    return (
        <div className="py-5 body">
            <h1 className="text-success text-center">Our Doctors</h1>
            <Container>
                <Row xs={1} md={3} className="g-2">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;