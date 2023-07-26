//import React, { Component } from 'react';
import { useState } from 'react';
import { ModalImg } from '../Modal/Modal';
import { ImgItem, ImgItemImg } from './ImageGalleryItem.styled';
function ImageGalleryItem({ item }) {
  // state = {
  //   isModalOpen: false,
  // };
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => {
  // this.setState({ isModalOpen: true });
    setIsModalOpen(true);
  };

const closeModal = () => {
  // this.setState({ isModalOpen: false });
  setIsModalOpen(false);
  };
  // render() {
    // const { item } = this.props;
    // const { isModalOpen } = this.state;
    return (
      <div>
        <ImgItem className="gallery-item" key={item.id} >
          <ImgItemImg onClick={openModal} src={item.webformatURL} alt={item.tags} loading="lazy" />
          {isModalOpen && (
            <ModalImg 
              image={item}
              closeModal={closeModal}
              isModalOpen={isModalOpen}
            />
          )}
        </ImgItem>
      </div>
  );
}

export default ImageGalleryItem;

