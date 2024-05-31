import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";
import { Product } from "../../types";

const Container = styled.div`
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  margin-left: 10px;
`;

const ProductList: React.FC = () => {
  const {
    products,
    addProduct,
    removeProduct,
    totalValue,
    discount,
    setDiscount,
  } = useContext(AppContext)!;
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: Date.now(),
      description,
      quantity,
      price,
    };
    addProduct(newProduct);
    setDescription("");
    setQuantity(1);
    setPrice(0);
  };

  return (
    <Container>
      <h2>Product List</h2>
      <div>
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <Button onClick={handleAddProduct}>Add</Button>
      </div>
      <div>
        {products.map((product) => (
          <ProductRow key={product.id}>
            <span>{product.description}</span>
            <span>{product.quantity}</span>
            <span>{product.price.toFixed(2)}</span>
            <Button onClick={() => removeProduct(product.id)}>Remove</Button>
          </ProductRow>
        ))}
      </div>
      <div>
        <p>Total Value: R$ {(totalValue - discount).toFixed(2)}</p>
        <Input
          type="number"
          placeholder="Discount"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
        />
      </div>
    </Container>
  );
};

export default ProductList;
