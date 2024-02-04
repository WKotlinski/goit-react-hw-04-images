import { Component } from "react";
import axios from "axios";
import Searchbar from "./searchbar";
import ImageGallery from "./gallery/image-gallery";
import Modal from "./modal/modal";
import Loader from "./loader";
import Button from "./button";

const API_KEY = "41167232-e4ed0bcecad469809d9012c23";
const BASE_URL = "https://pixabay.com/api/";

export default class Featcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedImageUrl: "",
      isModalOpen: false,
      isLoading: false,
    };
  }

  fetchData = async (query, page = 1) => {
    this.setState({ isLoading: true });

    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await axios.get(url);
      this.setState((prevState) => ({
        images:
          page === 1
            ? response.data.hits
            : [...prevState.images, ...response.data.hits],
        page: page + 1,
        query,
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    const { query, page } = this.state;
    this.fetchData(query, page);
  };

  openModal = (imageUrl) => {
    console.log("Modal działa");
    this.setState({
      selectedImageUrl: imageUrl,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedImageUrl: "",
      isModalOpen: false,
    });
  };
  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        {isLoading && <Loader />}
        <Searchbar onSubmit={this.fetchData} />
        <ImageGallery images={images} onClick={this.openModal} />
        {images.length > 0 && !isLoading && (
          <Button onClick={this.loadMore} disabled={false} />
        )}
        <Modal
          isOpen={this.state.isModalOpen}
          imageUrl={this.state.selectedImageUrl}
          onClose={this.closeModal}
        />
      </div>
    );
  }
}
