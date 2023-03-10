import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, showImage }) => {
    return <ul className={styles.ImageGallery}>
        {images.map(image => <ImageGalleryItem
            key={image.id}
            largeImage={image.largeImageURL}
            image={image.webformatURL}
            text={image.tags}
            showImage={showImage}
        />)}
    </ul>;
}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    showImage: PropTypes.func.isRequired
}