//import React, { Component } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import { SearchHeader,  SearchForm,  FormInput,  SearchFormButton,  ButtonLabel,} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');
  const handleChange = evt => {
    setSearchName(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchName.trim() === '') {
      toast.error('Please enter your search term.', { theme: 'colored' });
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };
  return (
    <SearchHeader className="searchbar">
      <SearchForm onSubmit={handleSubmit} className="form">
        <SearchFormButton type="submit">
          <ImSearch />
          <ButtonLabel>Search</ButtonLabel>
        </SearchFormButton>
        <FormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images."
          value={searchName}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchHeader>
  );
}

export default Searchbar;
