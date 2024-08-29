import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_ITEMS_IMAGE } from '../utils/constants';
import { addItems } from '../utils/cartSlice';
import { toggleAddtoCart } from '../utils/addtocartSlice';

const MenuList = ({ items }) => {
  const [showNotification, setShowNotification] = useState(false);
  const addCart = useSelector(store => store.addCart.add);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
    setShowNotification(true); // Show notification after adding item
    setTimeout(() => {
      setShowNotification(false); // Hide notification after some time (e.g., 3 seconds)
    }, 3000);
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="flex justify-between mt-4 border-b border-solid border-bg-slate-300">
            <div data-testid="fooditems" className="item">
              <p className="name font-medium text-stone-800">{item.card.info.name}</p>
              <p className="price font-normal text-[15px] text-stone-800">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</p>
              <p className="description w-[600px] text-[12px] text-stone-500 mt-6 mb-6">{item.card.info.description}</p>
            </div>
            <div className="menu_img_container w-32 p-5 flex items-end justify-center">
              <img className="menu_img w-32 relative" src={MENU_ITEMS_IMAGE + item.card.info.imageId} />
              <button
                className="border border-solid text-green-600 px-2 py-1 absolute bg-white text-[15px] font-medium rounded-lg TEX"
                onClick={() => { handleAddItem(item); }}
              >
                ADD +
              </button>
            </div>
          </div>
        ))}
      </div>
      {showNotification && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white px-4 py-2 rounded-md">
          Item added to cart!
        </div>
      )}
    </>
  );
};

export default MenuList;
