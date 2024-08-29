// import React from 'react';
// import { Link } from 'react-router-dom';
// import RestaurentCard from './RestaurentCard'; // Correct import statement
// import { withVegLabel } from './VegLabel';

// const BodyCard = ({ filteredRestaurent }) => {

//   const RestaurantCardVeg = withVegLabel(RestaurentCard); 

//   console.log(filteredRestaurent);
//   return (
//     <div data-testid="rescard" className="restuarent-container flex justify-start items-center pl-6 flex-wrap ">
//       {filteredRestaurent.map((restaurent) => (
//         <Link key={restaurent.info.id} to={"/restaurant/" + restaurent.info.id}>
//           {restaurent.info.veg ? <RestaurantCardVeg resData={restaurent.info} /> : <RestaurentCard resData={restaurent?.info} />}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default BodyCard;
