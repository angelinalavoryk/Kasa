import Appartements from '../../data/Appartements.json';
import './_Cards.scss'
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <section className='section__cards-bg'> 
      <div className='section__cards-apparts'>
        {Appartements.map((appartement) => (
          <Link to={`/appartement/${appartement.id}`} key={appartement.id} className="card-link">
            <div className="card">
              <h2 className="card-title">{appartement.title}</h2>
              <img src={appartement.cover} alt={appartement.title} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


export default Cards;