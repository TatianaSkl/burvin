import Select from 'react-select';
import views from '../../bd/views.json';
import sizes from '../../bd/dimensions.json';
import { FormFilter, LabelFilter, WrapperView, WrapperSize, customStyles } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { selectFilterSize, selectFilterView } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterView = useSelector(selectFilterView);
  const filterSize = useSelector(selectFilterSize);

  const viewsOptions = views.map(item => ({
    value: item,
    label: item,
  }));

  const sizesOptions = sizes.map(item => ({
    value: item,
    label: item,
  }));

  const handleViewChange = selectedOption => {
    dispatch(getFilter({ view: selectedOption.value, size: filterSize }));
  };

  const handleSizeChange = selectedOption => {
    dispatch(getFilter({ view: filterView, size: selectedOption.value }));
  };

  return (
    <FormFilter>
      <div>
        <LabelFilter>
          Вид виробу
          <WrapperView>
            <Select
              name={'view'}
              options={viewsOptions}
              styles={customStyles}
              isSearchable={false}
              onChange={handleViewChange}
              placeholder="Всі"
            />
          </WrapperView>
        </LabelFilter>
      </div>
      <div>
        <LabelFilter>
          Розмір
          <WrapperSize>
            <Select
              name={'size'}
              options={sizesOptions}
              styles={customStyles}
              isSearchable={false}
              onChange={handleSizeChange}
              placeholder="Всі"
            />
          </WrapperSize>
        </LabelFilter>
      </div>
    </FormFilter>
  );
};
