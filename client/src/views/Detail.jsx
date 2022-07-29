import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// 2. display info on load (useEffect)
// 1. get id from params (useParams)
// 3. for the info: useState
// 4. grab info from backend: axios
const Detail = () => {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe/' + id)
            .then(res => setRecipe(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            {
                recipe ?
                    <div>
                        <h1>{recipe.name}</h1>
                        <br />
                        <img src={recipe.img} alt="funny" />
                        <br />
                        <br />
                        <p>Ingredients: {recipe.ingredients}</p>
                        <br />
                        <p> Instruction: {recipe.instruction}</p>
                    </div> :
                    <h5>This Recipe is not available!</h5>

            }
        </div>
    )
}
export default Detail;