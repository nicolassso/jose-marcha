import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import image2 from '../../assets/images/volcan-grande-4.jpeg'


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'José Marchá',
          imageUrl: image2,
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;