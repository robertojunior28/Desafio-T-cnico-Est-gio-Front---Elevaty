import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Table from "../../components/Table";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      
        const response = await fetch(
          "https://fakerapi.it/api/v1/products?_quantity=27&_locale=en_US&_taxes=10&_categories_type=string"
        );
        const data = await response.json();
        setProducts(data.data);
      
    };

    fetchProducts();
  }, []);


  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const cancel = () => {
    
  };


  return (
    <div>
      <h1>Store</h1>
      <div>
        <Table products={products}
          deleteProduct={deleteProduct}
          cancel={cancel} />
      </div>
    </div>
  )
}
export default Products;
