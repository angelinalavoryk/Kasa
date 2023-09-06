import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Carousel from '../../components/Carousel/Carousel.jsx'
import Tag from '../../components/Tag/Tag.jsx';
import Appartements from '../../data/Appartements.json';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Host from '../../components/Host/Host.jsx';
import Rating from '../../components/RatingStars/Rating.jsx'
import './_Appartment.scss';

const Appartment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedAppartement, setSelectedAppartment] = useState(null);
  
    useEffect(() => {
      const foundAppartement = Appartements.find(appartement => appartement.id === id);
      if (foundAppartement) {
        setSelectedAppartment(foundAppartement);
      } else {
        navigate("/error", { replace: true });
      }
    }, [id, navigate]);
    if (!selectedAppartement) {
      return null;
    } 
    return (
        <section className="appartment-page">

            <div className='caroussel'>
              <Carousel slides={selectedAppartement.pictures} />
            </div>

            <div className='appartment'>

                <div className='appart_description'> 
                    <h1 className='appart-name'>{selectedAppartement.title}</h1>
                    <p className='appart-location'>{selectedAppartement.location}</p>
                    <div className="appartment-tags">{selectedAppartement.tags.map((tag, index) => (
                        <Tag key={index} text={tag} />))}
                    </div>
                </div>

                <div className='appart_host'> 
                <Host name={selectedAppartement.host.name} picture={selectedAppartement.host.picture} />
                <Rating score={selectedAppartement.rating} />

                </div>
            </div>

            <div className="appartment-details">
                <div className="collapse_appart"><Collapse title="Description" content={selectedAppartement.description} />
            </div>
            <div className="collapse_appart"><Collapse title="Équipements" content={selectedAppartement.equipments} className="collapse_appart-list" /> </div>
            </div>
        </section>
    );
  }
  
  export default Appartment;