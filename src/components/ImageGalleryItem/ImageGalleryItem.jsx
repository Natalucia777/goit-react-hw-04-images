//import React, { Component } from 'react';
import { useState } from 'react';
import { ModalImg } from '../Modal/Modal';
import { ImgItem, ImgItemImg } from './ImageGalleryItem.styled';

function ImageGalleryItem({ item }) {
const [isModalOpen, setIsModalOpen] = useState(false);
const openModal = () => {
    setIsModalOpen(true);
  };
const closeModal = () => {
  setIsModalOpen(false);
  };
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

