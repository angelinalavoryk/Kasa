import './_Tag.scss';


const Tag = ({ text }) => {
    return (
      <div className="tag">
        <p className='p'>{text}</p>
      </div>
    );
  };
  
  export default Tag;