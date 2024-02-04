import React from "react";
import { Fade } from "react-awesome-reveal";

import "./IconsMeaning.scss";

export type IconsMeaningProps = {
  icons: { name: string; image: string }[];
};

const IconsMeaning: React.FC<IconsMeaningProps> = ({ icons }) => {
  return (
    <Fade>
      <div className='icons-meaning-container'>
        <h3 className='icons-title'>the meaning of our icons:</h3>
        <div className='icons-meaning'>
          {icons.map((icon) => (
            <div className='icon' key={icon.name}>
              <img className='icon-image' alt='Icon' src={icon.image} />
              <h3 className='icon-meaning'>{icon.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default IconsMeaning;
