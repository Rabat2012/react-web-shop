import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Pagination, Slider, TextField } from "@mui/material";
import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import "./ProductsList.css";

const ProductsList = () => {
  const { products, getProducts, pages } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );
  const [price, setPrice] = useState([1, 1000]);
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 2,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Container>
      <Box className="search-box">
        <TextField
          className="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          label="Искать..."
          variant="filled"
        />
      </Box>
      <Box className="content">
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>

      <Slider
        className="slider"
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={(e, value) => {
          setPrice(value);
        }}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        step={10}
      />

      <Box className="pagination">
        <Pagination
          className="pagination-content"
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
          color="secondary"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
