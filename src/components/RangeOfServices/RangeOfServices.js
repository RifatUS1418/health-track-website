import React from 'react';
import './RangeOfServices.css';
import banner from '../../images/banner.jpg';

const RangeOfServices = () => {
    return (
        <div className="p-5 body">
            <div className="banner mt-3 mb-5">
                <img src={banner} alt="" />
            </div>
            <h2 className="pb-4">Health Track Hospital now offers you a wide <span className="fw-bold">Range of Services</span> which includes:</h2>
            <div className="row font">
                <div className="col-md-4 col-12">
                    <ul>
                        <li>Haematology</li>
                        <li>Pathology</li>
                        <li>Microbiology</li>
                        <li>Histopathology</li>
                        <li>Biochemistry</li>
                        <li>Immunoassay</li>
                        <li>Hormonal Assay</li>
                        <li>Electrophoresis</li>
                        <li>PCR</li>
                        <li>EEG/NCV</li>
                        <li>Spirometry</li>
                        <li>Uroflowmetry</li>
                        <li>Uro Dynamics</li>
                    </ul>
                </div>
                <div className="col-md-4 col-12">
                    <ul>
                        <li>Safe Blood Screening & Transfusion Center</li>
                        <li>Infertility Treatment Center</li>
                        <li>Physiotherapy Center</li>
                        <li>Emergency Facilities</li>
                        <li>12 Bedded Dialysis Unit.</li>
                        <li>Modern O.T. Complex (3 units)</li>
                        <li>Modern Labor Rooms (2 units)</li>
                        <li>Cabins for Inpatients</li>
                        <li>Modern Eye Hospital & Research Centre.</li>
                        <li>Modern Cath Lab Facilities.</li>
                        <li>Tele Radiology, Tele Consultation, E. Reporting, and EMR Facilities.</li>
                    </ul>
                </div>
                <div className="col-md-4 col-12">
                    <ul>
                        <li>Specialized Consultants Chamber Complex.</li>
                        <li>Health Checkup Facilities.</li>
                        <li>Priority Health Checkup Facilities for Chevrons Card Holders & Corporate Clients.</li>
                        <li>24 Hrs. Medical Help Line Service (For members only).</li>
                        <li>Medical Counseling& Out Sourcing.</li>
                        <li>Vaccination.</li>
                        <li>Retail Pharmacy Services.</li>
                        <li>Ambulance Services (General)</li>
                        <li>Critical Care Patient’s Transportation Services.
                        </li>
                        <li>AIR Ambulance Services.</li>
                    </ul>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 col-12">
                    <h2 className="mb-4"><span className="fw-bold">Critical Care</span> Facilities
                    </h2>
                    <ul className="font">
                        <li>ICU</li>
                        <li>HDU</li>
                        <li>CCU & Post CCU</li>
                        <li>PICU</li>
                        <li>NICU & Nursery</li>
                    </ul>
                </div>
                <div className="col-md-6 col-12">
                    <h2 className="mb-4"><span className="fw-bold">Imaging</span> Department
                    </h2>
                    <ul className="font">
                        <li>16 & 128-slice 4D High Definition Spiral CT Scans</li>
                        <li>1.5 Tesla/18-channel & 3 Tesla Superconductive Open MRI</li>
                        <li>Dual Head Gama Camera</li>
                        <li>Digital X-Ray with CR & DR Facilities.</li>
                        <li>Bone Mineral Densiometry (BMD) Dexa Scan</li>
                        <li>Mammography</li>
                        <li>OPG</li>
                        <li>Video Endoscopy</li>
                        <li>Video Colonoscopy</li>
                        <li>Video Bronchoscopy</li>
                        <li>4D Color Doppler Ultrasonography</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RangeOfServices;