import React, { useContext, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim() || !image.trim() || !price) {
      alert("Заполните поля!");
    } else {
      createProduct(newProduct);
      navigate("/products");
    }
  }
  return (
    <Container className="containerAdd" maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography className="addProduct" variant="h4">
          Добавить продукт
        </Typography>
        <TextField
          className="addProduct"
          label="Название"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className="addProduct"
          type="number"
          label="Цена"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          className="addProduct"
          label="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="addProduct"
          label="Cсылка на изображение"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button className="addProduct" onClick={handleSave} variant="contained">
          Сохранить
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
