import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Img from "./imagemilustrativa1.jpg";
import Table from "../../components/Table";
import {
  PaginationButtonsWrapper,
  PaginationButton,
} from "./styles";
import {
  ModalContentWrapper,
  ProductImage,
  ProductTitle,
  ProductInfo,
  ProductDescriptionTitle,
  ProductDescription,
} from "./styles";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.title = "Ecommerce";
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakerapi.it/api/v1/products?_quantity=10&_page=${currentPage}&_locale=en_US&_taxes=10&_categories_type=string`
      );
      const data = await response.json();
      setProducts(data.data);
    };

    fetchProducts();
  }, [currentPage]);

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const view = (productId) => {
    const selectedProduct = products.find(product => product.id === productId);
    setSelectedProduct(selectedProduct);
    setOpenModal(true);
  };

  const closeViewModal = () => {
    setOpenModal(false);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Header />
      <Table
        products={products}
        deleteProduct={deleteProduct}
        view={view}
      />
      
      {openModal && (
  <Modal onClose={closeViewModal}>
    {selectedProduct && (
      <ModalContentWrapper>
        <ProductImage src={Img} alt="Product" />
        <ProductTitle>{selectedProduct.name}</ProductTitle>
        <ProductInfo>
          <span className="title">Preço: </span>
          {selectedProduct.price}
        </ProductInfo>
        <ProductInfo>
          <span className="title">Taxa: </span>
          {selectedProduct.taxes}
        </ProductInfo>
        <ProductInfo>
          <span className="title">Preço Total: </span>
          {parseFloat(selectedProduct.price) +
            parseFloat(selectedProduct.taxes)}
        </ProductInfo>
        <ProductDescriptionTitle>Descrição do Produto</ProductDescriptionTitle>
        <ProductDescription>{selectedProduct.description}</ProductDescription>
      </ModalContentWrapper>
    )}
  </Modal>
)}

      <PaginationButtonsWrapper>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </PaginationButton>
        <span>{currentPage}</span>
        <PaginationButton onClick={nextPage}>Próximo</PaginationButton>
      </PaginationButtonsWrapper>
    </div>
  );
};

export default Products;

