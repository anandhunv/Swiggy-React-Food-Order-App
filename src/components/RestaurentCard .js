import { CDN_URL } from "../utils/constants";
const star = require("/images/rating_star.png");

const RestaurentCard = (props) => {
    const { resData } = props;

    if (!resData || !resData.aggregatedDiscountInfoV3) {
        return null; // or any other fallback UI if needed
    }

    const { name, cuisines, avgRatingString, cloudinaryImageId, costForTwo, areaName, slaString, aggregatedDiscountInfoV3 } = resData;
    const { header, subHeader } = aggregatedDiscountInfoV3;

    return (
        <div data-testid="rescard" className="res-card flex w-[220px] flex-col  ml-2 mt-2 mb-2 mr-10 rounded-3xl transition-transform duration-300 transform hover:scale-95 relative">
            <div>
                <h1>{}</h1>
            </div>
            <div className="img-container w-[220px] h-[135px] items-center justify-center overflow-hidden flex rounded-3xl scale-[290px] shadow-md shadow-gray-300 relative">
                <img className="res-img w-[250px] h-[160px] rounded-3xl relative" src={CDN_URL + cloudinaryImageId}/>
                <div className="discount-info absolute flex text-2xl font-extrabold text-nowrap text-white overflow-ellipsis bg-gradient-to-t justify-start pl-2 pb-2 from-black  w-full h-full items-end">
                <p className="header">{header}</p>
                <p className="sub-header text-ellipsis overflow-hidden whitespace-nowrap">{subHeader}</p>
            </div>
            </div>

            <div className="details mt-1 p-2 flex flex-col text-nowrap truncate text-slate-900">
                <h4 className="truncate font-bold">{name}</h4>
                <h4 className="flex font-extrabold "><img src={star} className="w-[18px] h-[18] mr-1"/>{avgRatingString} •{slaString} </h4>
                <p className="cusines truncate text-[15px]">{cuisines.join(",")}</p>
                <p className="area text-[15px]">{areaName}</p>
            </div>

            {/* Rendering header and subHeader */}
           
        </div>
    );
};

export default RestaurentCard;
