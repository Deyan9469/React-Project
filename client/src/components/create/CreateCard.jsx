import { useNavigate } from 'react-router-dom';
import "./createCardCSS.css"
import * as bedSheetService from '../../services/service';

export default function CreateCard() {
    const navigate = useNavigate();

    const createSubmitHandler = async (e) => {
        e.preventDefault();


        const bedSheetData = Object.fromEntries(new FormData(e.currentTarget));
        
        const data = Object.values(bedSheetData);

        if (data.some(x => x === "")) {
            return alert("All fields are required!");
        }

        try {
            await bedSheetService.create(bedSheetData);

            navigate('/');
        } catch (err) {

            throw new Error(err);
        }
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createSubmitHandler}>
                <div className="card-container">
                    <h1>Create your post</h1>
                    <label htmlFor="Model">Model</label>
                    <input type="text" id="model" name="model" placeholder="Enter Model..." />

                    <label htmlFor="Material">Material</label>
                    <input type="text" id="material" name="material" placeholder="Enter Material..." />

                    <label htmlFor="Size">Size</label>
                    <input type="text" id="size" name="size" min="1" placeholder="200x200cm" />

                    <label htmlFor="Size">Parts</label>
                    <input type="text" id="parts" name="parts" min="1" placeholder="1-6 pats" />

                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" placeholder="Enter price with like 20$" />

                    <label htmlFor="color">Color</label>
                    <input type="text" id="color" name="color" placeholder="Enter color" />

                    <label htmlFor="imageUrl">Image Url</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter imageUrl" />

                    <input className="btn submit" type="submit" value="Create Post" />
                </div>
            </form>
        </section>
    );
}
