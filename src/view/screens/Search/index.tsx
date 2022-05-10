import React from 'react';
import {Searchbar} from 'react-native-paper';
import {SearchIcon} from '../../assets/icons/icon';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Искать"
      onChangeText={onChangeSearch}
      value={searchQuery}
      icon={SearchIcon}
      style={{
        backgroundColor: '#E8EBF0',
        height: 50,
        width: '100%',
        marginTop: 20,
        borderRadius: 10,
      }}
    />
  );
};

export default Search;
