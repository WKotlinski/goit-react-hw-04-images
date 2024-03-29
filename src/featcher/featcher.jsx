import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "../components/searchbar/searchbar";
import ImageGallery from "../components/gallery/image-gallery";
import Modal from "../components/modal/modal";
import Loader from "../components/loader/loader";
import Button from "../components/button/button";

const API_KEY = "41167232-e4ed0bcecad469809d9012c23";
const BASE_URL = "https://pixabay.com/api/";

const Featcher = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImagesUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [query, setQuery] = useState("");

  const fetchData = async (query, page = 1) => {
    setIsLoading(true);

    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await axios.get(url);
      setImages((prevImages) =>
        page === 1 ? response.data.hits : [...prevImages, ...response.data.hits]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const queryChanger = (newQuery) => {
    setQuery(newQuery);
    setActivePage(1);
  };
  const loadMore = () => {
    setActivePage((prev) => prev + 1);
  };

  const openModal = (imageUrl) => {
    console.log("Modal działa");
    setSelectedImagesUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImagesUrl("");
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (query) {
      fetchData(query, activePage);
    }
  }, [query, activePage]);

  return (
    <div>
      {isLoading && <Loader />}
      <Searchbar onSubmit={queryChanger} />
      <ImageGallery images={images} onClick={openModal} />
      {images.length > 0 && !isLoading && (
        <Button onClick={loadMore} disabled={false} />
      )}
      <Modal
        isOpen={isModalOpen}
        imageUrl={selectedImageUrl}
        onClose={closeModal}
      />
    </div>
  );
};

export default Featcher;
