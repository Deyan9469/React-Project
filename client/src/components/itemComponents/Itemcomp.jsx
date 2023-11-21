import { useEffect, useState } from "react";
import Items from "./Items";
import * as requestService from "../../services/service";


const ItemList = () => {
    const [item, setItems] = useState([]);

    useEffect(() => {
      requestService.getAll()
      .then(data=>{setItems(data)});
    }, []);
console.log(item)

    return (
        <>
            {item.map(card =>(
                <Items key={card._id} {...card} />
            ))}

        </>
    );

}

export default ItemList;
