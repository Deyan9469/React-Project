import { useEffect, useState } from "react";
import Items from "./Items";


const baseUrl = "http://localhost:3030/jsonstore/bedsheet";

const ItemList = () => {

    const [item, setItems] = useState([]);

    useEffect(() => {

        fetch(baseUrl)
            .then(res => res.json())
            .then((data) => {
                setItems();
                // console.log(Object.values(data))
            });
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
