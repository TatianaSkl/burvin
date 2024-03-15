import { useDispatch } from 'react-redux';
import { useState } from 'react';
import views from '../../bd/views.json';
import {
  Form,
  LabelForm,
  InputForm,
  ButtonForm,
  SelectForm,
  ButtonColor,
  ButtonSize,
  Wrap,
} from './ProductFormNew.styled';
import { addProduct } from 'redux/products/operations';

export const ProductFormNew = ({ onClose }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    article: '',
    name: '',
    view: '',
    options: [{ color: '', sizes: [''] }],
    price: '',
    originalPrice: '',
    discount: '',
    compound: '',
    fotos: [''],
    video: '',
    season: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProduct(product));
    onClose();
  };

  const handleOptionChange = (optionIndex, e) => {
    const newOptions = [...product.options];
    if (e.target.name === 'color') {
      newOptions[optionIndex].color = e.target.value;
    }
    setProduct({ ...product, options: newOptions });
  };

  const handleSizeChange = (optionIndex, sizeIndex, e) => {
    const newOptions = [...product.options];
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
      <Wrap>
        <div>
          <LabelForm>Артикул</LabelForm>
          <InputForm
            type="text"
            name="article"
            value={product.article}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <LabelForm htmlFor="name">Вид виробу</LabelForm>
          <InputForm
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <LabelForm htmlFor="view">Вид групи</LabelForm>
          <SelectForm name="view" value={product.view} onChange={handleInputChange} required>
            {views.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </SelectForm>
        </div>
        <div>
          <LabelForm htmlFor="price">Ціна</LabelForm>
          <InputForm
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <LabelForm htmlFor="originalPrice">Початкова ціна</LabelForm>
          <InputForm
            type="text"
            name="originalPrice"
            value={product.originalPrice}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <LabelForm htmlFor="discount">Знижка</LabelForm>
          <InputForm
            type="text"
            name="discount"
            value={product.discount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <LabelForm htmlFor="compound">Склад</LabelForm>
          <InputForm
            type="text"
            name="compound"
            value={product.compound}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <LabelForm htmlFor="video">Відео</LabelForm>
          <InputForm type="text" name="video" value={product.video} onChange={handleInputChange} />
        </div>
        <div>
          <LabelForm htmlFor="season">Сезон</LabelForm>
          <InputForm
            type="text"
            name="season"
            value={product.season}
            onChange={handleInputChange}
            required
          />
        </div>
        {product.options.map((option, optionIndex) => (
          <div key={optionIndex}>
            <LabelForm>Колір</LabelForm>
            <InputForm
              type="text"
              value={option.color}
              onChange={e => handleOptionChange(optionIndex, e)}
              name="color"
              required
            />
            {option.sizes.map((size, sizeIndex) => (
              <div key={sizeIndex}>
                <LabelForm>Розмір {sizeIndex + 1}</LabelForm>
                <InputForm
                  type="text"
                  value={size}
                  onChange={e => handleSizeChange(optionIndex, sizeIndex, e)}
                  name={`size-${sizeIndex}`}
                  required
                />
              </div>
            ))}
            <ButtonSize type="button" onClick={() => addSizeToOption(optionIndex)}>
              Додати розмір
            </ButtonSize>
          </div>
        ))}
        <ButtonColor type="button" onClick={addColorOption}>
          Додати колір
        </ButtonColor>
        <div>
          {product.fotos.map((foto, index) => (
            <div key={index}>
              <LabelForm>Фото {index + 1}</LabelForm>
              <InputForm
                type="text"
                value={foto}
                onChange={e => handleFotoChange(index, e)}
                name={`foto-${index}`}
              />
            </div>
          ))}
          <ButtonSize type="button" onClick={addFoto}>
            Додати фото
          </ButtonSize>
        </div>
      </Wrap>
      <ButtonForm type="submit">Додати</ButtonForm>
    </Form>
  );
};
