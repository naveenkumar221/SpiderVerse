import { useState } from "react";
import "./Gallery.css";
import gallery from "../../data/gallery";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <h1>SpiderVerse Gallery</h1>

      <div className="gallery-grid">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => setSelectedImage(item.image)}
          >
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Gallery" />
        </div>
      )}
    </section>
  );
}

export default Gallery;