import React, { useState } from 'react';
import './_Collapse.scss';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2 className="collapse_title">{title}</h2>
        <div className={`arrow ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul className="collapse__list-ul">
              {content.map((item, index) => (
                <li className='collapse__list-li' key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <div>{content}</div>
          )}
        </div>
      )}
    </div>
  );
};
  
  export default Collapse;



  

