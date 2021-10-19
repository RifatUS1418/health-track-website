import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = ({ services }) => {
    const { serviceId } = useParams();
    // console.log(serviceId);
    const allServices = services;
    // console.log(allServices);
    const details = allServices.find(service => service.id === parseInt(serviceId));
    // console.log(details);
    return (
        <div className="card my-5">
            <div className="card-detail m-3">
                <img src={details.img} alt="" />
                <h3 className="m-3">{details.name}</h3>
                <p>{details.description}</p>
            </div>

        </div >
    );
};

export default ServiceDetails;