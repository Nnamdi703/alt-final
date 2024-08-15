import Image from "next/image";
import pictures from '../public/pix.png';

const PictureComponent: React.FC = () => {
  return (
    <div className="ii">
            <div className="first-text">
            <h1>
             Links have never been more fun
            </h1>
            <p className="text-gray-100">
              Make that event gitinit link shorter. Super fast!
            </p>
            </div>
            <div className="first-image">
            <Image src={pictures} alt='picture'/>
            </div>
          </div>
  );
};

export default PictureComponent;
