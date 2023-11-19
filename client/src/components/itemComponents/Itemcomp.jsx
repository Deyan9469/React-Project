import { useEffect, useState } from "react";
import Items from "./Items";
import * as servece from "../../serveces/servece";



const ItemList = () => {

    const [item, setItems] = useState([]);

    useEffect(() => {

        servece.getAll()
            .then(result => setItems(result));
    }, []);


    return (
        <>
            {item.map((card) =>
                <Items key={card._id} {...card} />
            )}
        </>
    );

}

export default ItemList;
