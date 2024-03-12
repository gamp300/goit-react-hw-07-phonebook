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
      Buscar contactos por nombre
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
