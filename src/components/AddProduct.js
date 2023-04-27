import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function inputChange() {
    let newProduct = {
      title,
      image,
      price,
    };
    addProduct(newProduct);
    setTitle("");
    setImage("");
    setPrice("");
  }
  return (
    <div>
      <h3>AddProduct</h3>
      <div>
        <div style={{ margin: "15px" }}>
          <input
            placeholder="Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={{ margin: "15px" }}>
          <input
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div style={{ margin: "15px" }}>
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <button onClick={inputChange}>create</button>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
