import { useEffect, useState } from "react";
import * as requestService from "../../services/service";
import CardComp from "./Card";


const CardItems = () => {
    const [item, setItems] = useState([]);

    useEffect(() => {
        requestService.getAll()
            .then(data => { setItems(data) });
    }, []);


    return (
        <div className="cardHolder">
            {item.map(card => (
                <CardComp key={card._id} {...card} />
            ))}
        </div>
    );

}

export default CardItems;
