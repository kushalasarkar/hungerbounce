import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const { resid } = useParams()
    const [resDetails, setResDetails] = useState([]);
    const [resCuisines, setResCuisines] = useState([]);
    
    const [menu, setMenu] = useState([]);
    const [menuCategory, setMenuCategory] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.516726&lng=73.856255&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        // console.log(json);

        setResDetails(json.data.cards[0].card.card.info);
        setResCuisines(json.data.cards[0].card.card.info.cuisines)

        setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
        setMenuItems();
    }
    const menulist = (menu)=>{
        
    }

    // console.log(resCuisines);

    return (
        <div>
            <div className='info'>
                <h1>{resDetails.name}</h1>
                <p>{resCuisines.join(', ')}</p>                
            </div>
            <div className='menu'>
                {menu.map((e)=>(
                <>
                    <h3>{e.card.card.title}</h3>
                    {e.card.card.itemCards.map((i)=>(<p>{i.card.info.name}</p>))}
                    {/* <p>{e.card.card.itemCards.card.info.name.join(', ')}</p> */}
                </>
                // {menu.map((e)=>(<p>{e.card.card.itemCards.map((i)=>(i.card.info.name))}</p>
                
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu