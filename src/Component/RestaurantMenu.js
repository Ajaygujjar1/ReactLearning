

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer/>;


    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (<div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>{costForTwoMessage}</h2>
        <h3>Menu</h3>
        <ul>
            {itemCards.map((item) => (<li key={item.card.info.name.id}>
                {item.card.info.name} => {"Rs"}-{item.card.info.price / 100}
            </li>))}
        </ul>
    </div>);
};
export default RestaurantMenu;