import React, { Component } from 'react';
import { ModalImg } from '../Modal/Modal';
import { ImgItem, ImgItemImg } from './ImageGalleryItem.styled';
class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { item } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <ImgItem className="gallery-item" key={item.id} >
          <ImgItemImg onClick={this.openModal} src={item.webformatURL} alt={item.tags} loading="lazy" />
          {isModalOpen && (
            <ModalImg 
              image={item}
              closeModal={this.closeModal}
              isModalOpen={isModalOpen}
            />
          )}
        </ImgItem>
      </div>
    );
  }
}

export default ImageGalleryItem;

