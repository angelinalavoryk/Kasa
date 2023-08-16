import './_Host.scss';

const Host = ({ name, picture }) => {
  // Divise le nom en prénom
  const [firstName, lastName] = name.split(' ');

  return (
    <div className="host-info">

      <div className='host'>

        <div className='name'>
          <p className='host-name'>{firstName}</p>
        </div>
        <div className='last_name'>
          <p className='host-lastname'>{lastName}</p>
        </div>

      </div>

      <div className='host_photo'>
        <img src={picture} alt="HostProfile" className="host-img" />
      </div> 
    </div>
    
  );
};

export default Host;