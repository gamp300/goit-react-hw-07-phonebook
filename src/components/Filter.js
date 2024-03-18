import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './ContactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label htmlFor="filterInput">Search contacts by name</label>
      <input
        id="filterInput"
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
