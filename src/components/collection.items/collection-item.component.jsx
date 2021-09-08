import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

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

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);