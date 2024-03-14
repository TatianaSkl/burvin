import { useDispatch } from 'react-redux';
import { useState } from 'react';
import views from '../../bd/views.json';
import { Form, LabelForm, InputForm, ButtonForm } from './ProductFormChange.styled';
import { updateProduct } from 'redux/products/operations';

export const ProductFormChange = ({
  id,
  article,
  name,
  view,
  options,
  price,
  originalPrice,
  discount,
  fotos,
  video,
  compound,
  season,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    id: id,
    article: article || '',
    name: name || '',
    view: view || '',
    options: options || [{ color: '', sizes: [''] }],
    price: price || '',
    originalPrice: originalPrice || '',
    discount: discount || '',
    compound: compound || '',
    fotos: fotos || [],
    video: video || '',
    season: season || '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const productId = product.id;
    const updatedProductData = {
      article: product.article,
      name: product.name,
      view: product.view,
      options: product.options,
      price: product.price,
      originalPrice: product.originalPrice,
      discount: product.discount,
      fotos: product.fotos,
      video: product.video,
      compound: product.compound,
      season: product.season,
    };
    dispatch(updateProduct({ id: productId, updatedProductData }));
    onClose();
  };

  const handleOptionChange = (optionIndex, e) => {
    const newOptions = [...product.options];
    if (e.target.name === 'color') {
      newOptions[optionIndex] = {
        ...newOptions[optionIndex],
        color: e.target.value,
      };
    }
    setProduct({ ...product, options: newOptions });
  };

  const handleSizeChange = (optionIndex, sizeIndex, e) => {
    const newOptions = [...product.options];
    newOptions[optionIndex] = {
      ...newOptions[optionIndex],
      sizes: [...newOptions[optionIndex].sizes],
    };
    newOptions[optionIndex].sizes[sizeIndex] = e.target.value;
    setProduct({ ...product, options: newOptions });
  };

  const addColorOption = () => {
    setProduct({
      ...product,
      options: [...product.options, { color: '', sizes: [''] }],
    });
  };

  const addSizeToOption = optionIndex => {
    const newOptions = [...product.options];
    newOptions[optionIndex].sizes.push('');
    setProduct({ ...product, options: newOptions });
  };

  const handleFotoChange = (index, e) => {
    const newFotos = [...product.fotos];
    newFotos[index] = e.target.value;
    setProduct({ ...product, fotos: newFotos });
  };

  const addFoto = () => {
    setProduct({
      ...product,
      fotos: [...product.fotos, ''],
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm htmlFor="article">Артикул</LabelForm>
      <InputForm
        type="text"
        name="article"
        value={product.article}
        onChange={handleInputChange}
        required
      />
      <LabelForm htmlFor="name">Вид виробу</LabelForm>
      <InputForm
        type="text"
        name="name"
        value={product.name}
        onChange={handleInputChange}
        required
      />
      <LabelForm htmlFor="view">Вид групи</LabelForm>
      <select name="view" value={product.view} onChange={handleInputChange} required>
        {views.map((group, index) => (
          <option key={index} value={group}>
            {group}
          </option>
        ))}
      </select>
      {product.options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <label>Цвет</label>
          <input
            type="text"
            value={option.color}
            onChange={e => handleOptionChange(optionIndex, e)}
            name="color"
            required
          />
          {option.sizes.map((size, sizeIndex) => (
            <div key={sizeIndex}>
              <label>Размер {sizeIndex + 1}</label>
              <input
                type="text"
                value={size}
                onChange={e => handleSizeChange(optionIndex, sizeIndex, e)}
                name={`size-${sizeIndex}`}
                required
              />
            </div>
          ))}
          <button type="button" onClick={() => addSizeToOption(optionIndex)}>
            Добавить размер
          </button>
        </div>
      ))}
      <button type="button" onClick={addColorOption}>
        Добавить опцию цвета
      </button>
      <LabelForm htmlFor="price">Ціна</LabelForm>
      <InputForm
        type="text"
        name="price"
        value={product.price}
        onChange={handleInputChange}
        required
      />
      <LabelForm htmlFor="originalPrice">Початкова ціна</LabelForm>
      <InputForm
        type="text"
        name="originalPrice"
        value={product.originalPrice}
        onChange={handleInputChange}
      />
      <LabelForm htmlFor="discount">Знижка</LabelForm>
      <InputForm
        type="text"
        name="discount"
        value={product.discount}
        onChange={handleInputChange}
      />
      <LabelForm htmlFor="compound">Склад</LabelForm>
      <InputForm
        type="text"
        name="compound"
        value={product.compound}
        onChange={handleInputChange}
      />
      <label htmlFor="fotos">Фотографии</label>
      {product.fotos.map((foto, index) => (
        <div key={index}>
          <label>Фото {index + 1}</label>
          <input
            type="text"
            value={foto}
            onChange={e => handleFotoChange(index, e)}
            name={`foto-${index}`}
          />
        </div>
      ))}
      <button type="button" onClick={addFoto}>
        Добавить фото
      </button>
      <LabelForm htmlFor="video">Відео</LabelForm>
      <InputForm type="text" name="video" value={product.video} onChange={handleInputChange} />
      <LabelForm htmlFor="season">Сезон</LabelForm>
      <InputForm
        type="text"
        name="season"
        value={product.season}
        onChange={handleInputChange}
        required
      />
      <ButtonForm type="submit">Змінити</ButtonForm>
    </Form>
  );
};
