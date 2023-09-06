import './_Banner.scss';

function Banner({ imageUrl, title, customClass }) {
  return (
    // <div className="banner">
    <div className={`banner ${customClass}`}>
      <div className="banner__overlay"></div>
      <img src={imageUrl} alt="Banner" className="banner__image" />
      {<h1 className="banner__title">{title}</h1>}
    </div>
  );
}

export default Banner;
