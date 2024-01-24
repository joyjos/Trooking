import './SearchBar.css';
import PropTypes from 'prop-types';

export const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <input
      className='searchBar'
      type='text'
      placeholder='Buscar hoteles'
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};
