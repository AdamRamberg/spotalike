import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import styled from 'styled-components';
import TextInput from '../../components/TextInput';
import SongList from '../../compositions/SongList';
import fetch from '../../utils/fetchWithParams';
import { API_URL } from '../../constants';

const StyledTextInput = styled(TextInput)`
  width: 100%;
  max-width: 48rem;
`;

const SearchWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => `-${theme.spacing(11)}`};
  left: ${({ theme }) => `-${theme.spacing(5)}`};
  right: ${({ theme }) => `-${theme.spacing(5)}`};
  display: flex;
  justify-content: center;
`;

const SearchSongs = () => {
  const [searchValue, setSearchValue] = useState('');
  const [matchingSongs, setMatchingSongs] = useState([]);
  const [debouncedSearchValue] = useDebounce(searchValue, 300);
  useEffect(() => {
    const fetchSongs = async () => {
      const queriedSongs = await fetch(`${API_URL}/songs`, {
        maxCount: 10,
        searchString: debouncedSearchValue,
      });
      setMatchingSongs(queriedSongs || []);
    };
    if (debouncedSearchValue) fetchSongs();
  }, [debouncedSearchValue]);

  return (
    <SearchWrapper>
      <StyledTextInput
        inputProps={{
          placeholder: 'Enter a track',
          value: searchValue,
          onChange: e => setSearchValue(e.target.value),
        }}
        iconProps={{
          onClick: () => {
            setSearchValue('');
            setMatchingSongs([]);
          },
        }}
      >
        {searchValue && matchingSongs.length > 0 && (
          <SongList songs={matchingSongs} />
        )}
      </StyledTextInput>
    </SearchWrapper>
  );
};

export default SearchSongs;
