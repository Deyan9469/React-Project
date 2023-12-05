import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as requestService from '../../services/service';


const EditPage = () => {
    const navigate = useNavigate()
    const { cardId } = useParams();

    const [cardInfo, setCardInfo] = useState({
        model: '',
        material: '',
        size: '',
        price: '',
        color: '',
        imageUrl: '',
    });

    useEffect(() => {
        requestService.getOne(cardId)
            .then(data => setCardInfo(data))
    }, [cardId]);

    const onEditSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        const data = Object.values(values);

        if (data.some(x => x === "")) {
            return alert("All fields are required!");
        }

        try {
            await requestService.edit(cardId, values);

            navigate('/');
        } catch (err) {
            throw new Error(err);
        }
    }

    const onChange = (e) => {
        setCardInfo(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };


    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onEditSubmitHandler}>
                <div className="card-container">
                    <h1>Edit your post</h1>
                    <label htmlFor="Model">Model</label>
                    <input type="text" id="model" name="model" value={cardInfo.model} onChange={onChange} placeholder="Enter Model..." />

                    <label htmlFor="Material">Material</label>
                    <input type="text" id="material" name="material" value={cardInfo.material} onChange={onChange} placeholder="Enter Material..." />

                    <label htmlFor="Size">Size</label>
                    <input type="text" id="size" name="size" min="1" value={cardInfo.size} onChange={onChange} placeholder="200x200cm" />

                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" value={cardInfo.price} onChange={onChange} placeholder="Enter price with like 20$" />

                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" value={cardInfo.color} onChange={onChange} placeholder="Enter color" />

                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={cardInfo.imageUrl} onChange={onChange} placeholder="Enter imageUrl" />

                    <input className="btn submit" type="submit" value="Edit Post" />
                </div>
            </form>
        </section>
    );

};


export default EditPage