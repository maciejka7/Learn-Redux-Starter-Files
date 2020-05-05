import React from 'react';

interface Props {
  children: any;
}

const PhotoGrid = (props: Props) => {
  return (
    <div className="photo-grid">
      im the photo grid
      {props.children}
    </div>
  );
};

export default PhotoGrid;
