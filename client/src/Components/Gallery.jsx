import image1 from "../assets/Group 4.png";
// import image2 from '../assets/Group 4.png'
// import image3 from '../assets/Group 4.png'

const Gallery = () => {
  return (
    <div className="overflow-y-scroll h-[80%] z-10">
      <div className="pt-6">
        <img src={image1} alt="" />
      </div>
      <div className="pt-6">
        <img src={image1} alt="" />
      </div>
      <div className="pt-6">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
