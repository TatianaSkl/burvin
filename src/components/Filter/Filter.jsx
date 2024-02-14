import Select from 'react-select';
import views from '../../bd/views.json';
import sizes from '../../bd/dimensions.json';
import {
  FormFilter,
  LabelMakes,
  SearchButton,
  WrapperMakes,
  WrapperPrice,
  customStyles,
} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { getFilter, resetFilter } from 'redux/filterSlice';
import { useRef, useState } from 'react';

export const Filter = () => {
  const dispatch = useDispatch();
  const viewRef = useRef(null);
  const sizeRef = useRef(null);
  const [showBtnReset, setShowBtnReset] = useState(false);

  const viewsOptions = views.map(item => ({
    value: item,
    label: item,
  }));

  const sizesOptions = sizes.map(item => ({
    value: item,
    label: item,
  }));

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const view = form.elements.view.value;
    const size = form.elements.size.value;
    dispatch(getFilter({ view, size }));
    setShowBtnReset(true);
  };

  const handleReset = () => {
    viewRef.current.clearValue();
    sizeRef.current.clearValue();
    dispatch(resetFilter());
    setShowBtnReset(false);
  };

  return (
    <FormFilter onSubmit={handleSubmit}>
      <div>
        <LabelMakes>
          Вид виробу
          <WrapperMakes>
            <Select
              name={'view'}
              options={viewsOptions}
              styles={customStyles}
              isSearchable={false}
              ref={viewRef}
              placeholder="Всі"
            />
          </WrapperMakes>
        </LabelMakes>
      </div>
      <div>
        <LabelMakes>
          Розмір
          <WrapperPrice>
            <Select
              name={'size'}
              options={sizesOptions}
              styles={customStyles}
              isSearchable={false}
              ref={sizeRef}
              placeholder="Всі"
            />
          </WrapperPrice>
        </LabelMakes>
      </div>
      <SearchButton>Пошук</SearchButton>
      {showBtnReset && (
        <SearchButton type="button" onClick={handleReset}>
          Скинути
        </SearchButton>
      )}
    </FormFilter>
  );
};
