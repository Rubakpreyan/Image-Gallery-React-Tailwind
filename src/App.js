import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import HeadPart from "./components/HeadPart";
import Footer from "./components/Footer";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="ml-10">
      <HeadPart />
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">
          No image is found
        </h1>
      )}
      {isLoading ? (
        <h1 className=" text-6xl text-center mx-auto mt-32">
          This page is Loading......
        </h1>
      ) : (
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:grid md:grid-cols-3 md:gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
