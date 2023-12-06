import { useEffect, useState } from "react";
import * as requestService from "../../services/service";
import CardComp from "./Card";


const CardItems = () => {
    const [item, setItems] = useState([]);

    useEffect(() => {
        requestService.getAll()
            .then(data => { setItems(data) });
    }, []);

    const onRemoveHandler = async (_id) => {

        const hasConfirmed = confirm(`Are you sure you want to delete`);
        
        if (hasConfirmed) {


            try {
                await requestService.remove(_id);

                setItems(currentItem =>
                    currentItem.filter(item => {
                        return item._id !== _id;
                    }))

            } catch (err) {
                throw new Error(err)
            };
        }

    }

    return (
        <div className="cardHolder">
            {item.map(card => (
                <CardComp key={card._id} {...card} onRemoveHandler={onRemoveHandler} />
            ))}
        </div>
    );

}

export default CardItems;
