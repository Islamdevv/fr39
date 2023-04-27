import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AddProduct({ addProduct, getOneProduct, oneProduct, editProduct }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setImage(oneProduct.image);
      setPrice(oneProduct.price);
    }
  }, [oneProduct]);

  function saveOneProduct() {
    let editedProduct = {
      title,
      image,
      price,
    };
    editProduct(id, editedProduct);
  }

  return (
    <div>
      <h3>EditProduct</h3>
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
          <button onClick={saveOneProduct}>save</button>
        </div>
      </div>
    </div>
  );
}
export default AddProduct;
