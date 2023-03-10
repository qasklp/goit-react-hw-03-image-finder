import React from "react";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./shared/components/Modal/Modal";
import { Loader } from "./Loader/Loader";

import { searchImages } from "./shared/services/images-api";

import styles from "./App.module.css"

export class App extends React.Component {
  state = {
    images: [],
    request: '',
    showModal: false,
    imageDetails: null,
    loading: false,
    page: 1,
  }

  setSearchRequest = ({ request }) => {
    this.setState({ request, images: [], page: 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      const { request, page } = this.state;
      const data = await searchImages(request, page);
      this.setState({ loading: true });
      this.setState(({ images }) => ({
        images: [...images, ...data.hits]
      }));
    }
    catch (error) {
      alert(error.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  }

  showImage = (largeImageURL, tags ) => {
    this.setState({
      showModal: true,
      imageDetails: {
        largeImageURL,
        tags,
      },
    })
  }

  hideImage = () => {
    this.setState({
      showModal: false,
      imageDetails: null,
    })
  }

  render() {
    const { images, showModal, imageDetails, loading } = this.state;
    return <div className={styles.App}>
      <Searchbar onSubmit={this.setSearchRequest} />
      {!loading ? <ImageGallery images={images} showImage={this.showImage} /> : <Loader />}
      {Boolean(images.length) && <Button onClick={this.loadMore} />}
      {showModal && <Modal close={this.hideImage}>
        <img className={styles.image} src={imageDetails.largeImageURL} alt={imageDetails.tags} />
      </Modal>}
    </div>
  }
} 