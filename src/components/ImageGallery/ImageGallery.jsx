import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImgGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <div>
      <ImgGalleryList className="gallery">
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ImgGalleryList>
    </div>
  );
};

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()).isRequired
}

export default ImageGallery;
