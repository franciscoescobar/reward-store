import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Wrapper, GridWrapper } from "./styled";
import api from "../../utils/api";

const Grid = () => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setProductsLoading(true);
      const prod = await api.getProducts();
      setProducts(prod);
    } catch (error) {
      console.log(error);
    } finally {
      setProductsLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const sortLower = () => {
    const productLower = [...products].sort((a, b) => {
      if (a.cost > b.cost) {
        return 1;
      }
      if (a.cost < b.cost) {
        return -1;
      }
      return 0;
    });
    setProducts(productLower);
  };
  const sortHigher = () => {
    const productHigher = [...products].sort((a, b) => {
      if (a.cost < b.cost) {
        return 1;
      }
      if (a.cost > b.cost) {
        return -1;
      }
      return 0;
    });

    setProducts(productHigher);
  };
  return (
    <Wrapper>
      <GridWrapper>
        {products.map(product => {
          return <Card key={product._id} product={product} />;
        })}
      </GridWrapper>
    </Wrapper>
  );
};

export default Grid;
