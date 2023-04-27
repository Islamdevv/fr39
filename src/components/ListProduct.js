import React, { useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function ListProduct({ readProduct, product, deleteProduct }) {
  useEffect(() => {
    readProduct();
  }, []);

  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {product.map((el) => (
        <div>
          <div
            style={{
              backgroundColor: "#181818",
              borderRadius: "15px",
              width: "200px",
              height: "330px",
            }}
          >
            <img
              style={{ marginTop: "15px", borderRadius: "10px" }}
              src={el.image}
              width={"150px"}
              alt="img"
            />
            <h4>{el.title}</h4>
            <h4>{el.price}</h4>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button onClick={() => navigate(`/edit/${el.id}`)}>
                <AiFillEdit />
              </button>
              <button onClick={() => deleteProduct(el.id)}>
                <AiFillDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListProduct;
