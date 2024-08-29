import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RestaurentCard from "./RestaurentCard ";
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const listOfRestaurent = useSelector(store => store.rest.restaurant);
  const filterres = useSelector(store => store.rest.filterrest);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText.trim()) {
      setError('Please enter a search keyword.');
      return;
    }
    if (listOfRestaurent && filterres) {
      const filteredRest = listOfRestaurent.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurent(filteredRest);
      setError(''); // Reset error if search is successful
    }
  };

  return (
    <div className='p-8  '>
      <form className="search mb-5 flex justify-center mt-32 absolute w-full " onSubmit={handleSearch}>
        <input
          type="text"
          data-testid="searchInputbox"
          className="w-[600px] outline-none border border-neutral-500 px-3 h-11 mr-4"
          placeholder="Search For Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-300 px-5 py-1 outline-none rounded-md"
        >
          Search
        </button>
      </form>
      <div className='w-screen flex justify-center '>
      {error && <p className="text-red-500">{error}</p>}

      </div>
      <div
        data-testid="rescard"
        className="restaurant-container flex flex-wrap items-center  mt-64 "
      >
        {filteredRestaurent && filteredRestaurent.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurentCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;