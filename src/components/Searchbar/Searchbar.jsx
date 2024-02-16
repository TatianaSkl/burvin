import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { SearchForm, ButtonForm, ButtonLabel, InputForm } from './Searchbar.styled';
import { getSearch } from 'redux/searchSlice';

export const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef(null);

  const onClikBattonForm = () => {
    setIsShow(prevIsShow => !prevIsShow);
  };

  useEffect(() => {
    if (isShow) {
      inputRef.current.focus();
    }
  }, [isShow]);

  const handleSearchChange = e => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    dispatch(getSearch(searchValue));
    navigate('/search');
    setIsShow(false);
    setSearchValue('');
  };

  return (
    <>
      <ButtonForm type="button" onClick={onClikBattonForm}>
        <ButtonLabel>
          <ImSearch />
        </ButtonLabel>
      </ButtonForm>
      {isShow && (
        <SearchForm onSubmit={handleSearchSubmit}>
          <InputForm
            type="text"
            autocomplete="off"
            placeholder="Пошук..."
            ref={inputRef}
            value={searchValue}
            onChange={handleSearchChange}
          />
        </SearchForm>
      )}
    </>
  );
};
