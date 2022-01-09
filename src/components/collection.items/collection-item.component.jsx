import React from 'react';
import { Link } from 'react-router-dom';

import { CloudinaryContext, Image } from 'cloudinary-react'

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <Link className='collection-item'
      to='/underConstruct'
      >
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted>
        Ver la colección
      </CustomButton>
      </Link>

    </div>
  );
};
export default CollectionItem;