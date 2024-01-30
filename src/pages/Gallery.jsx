import React from 'react'

function Gallery() {
  return (
    <>
    <div className="GalleryBox container-fluid">
        <h1>Our Photoshoots <br />Check Gallery</h1>
        <div className="row gallery">
            <div className="col-3 kids-1">
            <img
                  src={require("../kidsimg/9th.kids.webp")}
                  alt="Toyman kids"
                />
            </div>
            <div className="col-3 kids-2">
            <img
                  src={require("../kidsimg/10th.kids.webp")}
                  alt="Toyman kids"
                />
            </div>
            <div className="col-3 kids-1">
            <img
                  src={require("../kidsimg/11.kids.webp")}
                  alt="Toyman kids"
                />
            </div>
            <div className="col-3 kids-2">
            <img
                  src={require("../kidsimg/12.kids.webp")}
                  alt="Toyman kids"
                />
            </div>

        </div>
    </div>
    </>
  )
}

export default Gallery