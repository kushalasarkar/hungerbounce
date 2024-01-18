import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const { resid } = useParams()
    const [resDetails, setResDetails] = useState([]);
    const [resCuisines, setResCuisines] = useState([]);

    const [corousal, setCorousal] = useState([]);
    const [menuSec, setMenuSec] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.516726&lng=73.856255&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        // console.log(json);

        setResDetails(json?.data?.cards[0]?.card?.card?.info);
        setResCuisines(json?.data?.cards[0]?.card?.card?.info?.cuisines)

        setCorousal(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
        setMenuItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
        setMenuSec(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // setMenuItems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        // console.log(menu.length + "  is length");

    }


    // console.log(resCuisines);

    return (
        <div>
            <div className='info  '>
                <h1 className='font-extrabold'>{resDetails.name}</h1>
                <h5 className='font-bold'>{resCuisines.join(', ')}</h5>
            </div>
            <br />
            <div className='menu'>
                {menuSec != undefined ?
                    <><h2 className='underline'>Recomended...</h2> {menuSec.map((e) => (<><h5>{e.card.info.name} - Rs {e.card.info.price / 100}</h5></>))}</>
                    : 
                 
                corousal != undefined ?
                    <><h2>Top Picks</h2> {corousal.map((e) => (<><h3>{e.dish.info.name} - Rs {e.dish.info.price / 100}</h3></>))}</>
                    :
                    <><h2>{menuItems[0].card.info.category}</h2> {menuItems.map((e) => (<><p>{e.card.info.name} - Rs {e.card.info.price / 100}</p></>))}</>
                }

            </div>
            
        </div>
    )
}

export default RestaurantMenu