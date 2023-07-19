import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import { SearchHeader, SearchForm, FormInput, SearchFormButton, ButtonLabel } from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleChange = evt => {
    this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.searchName.trim() === '') {
      toast.error(
        'Please enter your search term.',
        { theme: 'colored' }
      );
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.reset();
  };
  reset = () => {
    this.setState({
      searchName: '',
    });
  };
  render() {
    return (
      <SearchHeader className="searchbar">
        <SearchForm onSubmit={this.handleSubmit} className="form">
          <SearchFormButton type="submit">
            <ImSearch />
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>
          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images."
            value={this.state.searchName}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchHeader>
    );
  }
}

export default Searchbar;
