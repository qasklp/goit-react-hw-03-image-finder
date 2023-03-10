import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ largeImage, image, text, showImage }) => {
    return <li className={styles.ImageGalleryItem} onClick={() => showImage(largeImage,text)}>
        <img className={styles.ImageGalleryItemImage} src={image} alt={text} />
    </li>;
}

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    showImage: PropTypes.func.isRequired
}