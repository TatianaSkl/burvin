import { useDispatch } from 'react-redux';
import { useState } from 'react';
import views from '../../bd/views.json';
import {
  Form,
  LabelForm,
  InputForm,
  ButtonForm,
  Wrap,
  SelectForm,
  ButtonSize,
  ButtonColor,
  ButtonDelete,
} from './ProductFormChange.styled';
import { updateProduct } from 'redux/products/operations';
import { MdDelete } from 'react-icons/md';

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
  description,
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
    description: description || '',
    fotos: fotos || [''],
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
      description: product.description,
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
    if (optionIndex >= 0 && optionIndex < newOptions.length) {
      const newSizes = [...newOptions[optionIndex].sizes, ''];
      newOptions[optionIndex] = {
        ...newOptions[optionIndex],
        sizes: newSizes,
      };
      setProduct({ ...product, options: newOptions });
    }
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

  const deleteSizeFromOption = (optionIndex, sizeIndex) => {
    const newOptions = [...product.options];
    if (sizeIndex >= 0 && sizeIndex < newOptions[optionIndex].sizes.length) {
      const newSizes = [...newOptions[optionIndex].sizes];
      newSizes.splice(sizeIndex, 1);
      newOptions[optionIndex] = {
        ...newOptions[optionIndex],
        sizes: newSizes,
      };
      setProduct({ ...product, options: newOptions });
    }
  };

  const deleteColorFromOption = optionIndex => {
    const newOptions = [...product.options];
    if (optionIndex >= 0 && optionIndex < newOptions.length) {
      newOptions.splice(optionIndex, 1);
      setProduct({ ...product, options: newOptions });
    }
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
          <LabelForm>Вид виробу</LabelForm>
          <InputForm
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <LabelForm>Вид групи</LabelForm>
          <SelectForm name="view" value={product.view} onChange={handleInputChange} required>
            {views.map((group, index) => (
              <option key={index} value={group}>
                {group}
              </option>
            ))}
          </SelectForm>
        </div>
        <div>
          <LabelForm>Ціна</LabelForm>
          <InputForm
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <LabelForm>Початкова ціна</LabelForm>
          <InputForm
            type="text"
            name="originalPrice"
            value={product.originalPrice}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <LabelForm>Знижка</LabelForm>
          <InputForm
            type="text"
            name="discount"
            value={product.discount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <LabelForm>Склад</LabelForm>
          <InputForm
            type="text"
            name="compound"
            value={product.compound}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <LabelForm>Відео</LabelForm>
          <InputForm type="text" name="video" value={product.video} onChange={handleInputChange} />
        </div>
        <div>
          <LabelForm>Сезон</LabelForm>
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
            <div style={{ position: 'relative' }}>
              <InputForm
                type="text"
                value={option.color}
                onChange={e => handleOptionChange(optionIndex, e)}
                name="color"
                required
              />
              <ButtonDelete onClick={() => deleteColorFromOption(optionIndex)}>
                <MdDelete />
              </ButtonDelete>
            </div>
            {option.sizes.map((size, sizeIndex) => (
              <div key={sizeIndex}>
                <LabelForm>Розмір {sizeIndex + 1}</LabelForm>
                <div style={{ position: 'relative' }}>
                  <InputForm
                    type="text"
                    value={size}
                    onChange={e => handleSizeChange(optionIndex, sizeIndex, e)}
                    name={`size-${sizeIndex}`}
                    required
                  />
                  <ButtonDelete onClick={() => deleteSizeFromOption(optionIndex, sizeIndex)}>
                    <MdDelete />
                  </ButtonDelete>
                </div>
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
        <div>
          <LabelForm>Опис</LabelForm>
          <InputForm
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
      </Wrap>
      <ButtonForm type="submit">Змінити</ButtonForm>
    </Form>
  );
};
