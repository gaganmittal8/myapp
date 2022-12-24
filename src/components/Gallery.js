import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        const photos = res.data;
        setPhotos(photos);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <Helmet>
        <title>React App | Gallery</title>
      </Helmet>
      <div className="gallery">
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-12">
              <div className="text-center mb-3">
                <h1>Gallery</h1>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="maindiv">
                {photos
                  .filter((item) => {
                    return item.id <= 12;
                  })
                  .map((item) => {
                    const { id, title, url } = item;
                    // console.log(id);
                    return (
                      <>
                        <div key={id} className="maindivinner">
                          <h6>{title}</h6>
                          <img src={url} alt={title} />
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
