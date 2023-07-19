import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import * as API from './api';
//import 'react-toastify/dist/ReactToastify.css';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import { AppBox } from './App.styled';
import { ErrorMessage, Text } from './App.styled';

class App extends Component {
  state = {
    searchName: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isEmpty: false,
    isShownButton: false,
    perPage: 12,
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchName, page } = this.state;
    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.getPictures(searchName, page);
    }
  }

  getPictures = async (searchName, page) => {
    this.setState({ isLoading: true, error: null });
    try {
      const { hits, totalHits } = await API.getComponentImages(searchName, page);
      if (!hits.length) {
        this.setState({ isEmpty: true });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page,
        isShownButton: page < Math.ceil(totalHits / this.state.perPage),
      }));
    } catch (error) {
      if (error.code !== 'ERR_CANCELED') {
        this.setState({
          error: 'Please, reloading the page!',
        });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = searchName => {
    this.setState({
      searchName,
      images: [],
      page: 1,
      isShownButton: false,
      isEmpty: false,
      error: null,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, isLoading, error, isEmpty, isShownButton } = this.state;
    return (
      <AppBox>
        <Searchbar onSubmit={this.handleSearch} />
        {isEmpty && <Text>
          No search images and photos.
        </Text>}
        {isLoading && <Loader />}
        <div>
          <ImageGallery items={images} />
          {isShownButton && <Button onClick={this.loadMore} />}
        </div>
        {error && <ErrorMessage>
          {error}
        </ErrorMessage>}
        <ToastContainer autoClose={2500} />
      </AppBox>
    );
  }
}
export default App;