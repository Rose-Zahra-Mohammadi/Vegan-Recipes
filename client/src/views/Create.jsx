// have a form, after submit: post at the database
// 1. input : states to track the changes
// 2. send into the database: axios
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [img, setImg] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instruction, setInstruction] = useState("")
    const [notes, setNotes] = useState("")
    const [errors, setErrors] = useState({})


    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipe', { name, type, img, ingredients, instruction, notes })
            .then(res => navigate("/"))
            .catch(err => {
                const errorMessages = err.response.data.errors
                console.log({ ...errorMessages })
                for (const eachKey in errorMessages) {
                    errorMessages[eachKey] = errorMessages[eachKey].message
                }
                console.log(errorMessages)
                setErrors(errorMessages)
            }
            )
    }
    return (
        <div className='backimg'>

            <br />
            <Link style={{ color: 'forestgreen' }} to={`/home`} > home </Link>
            <br />
            <h2 style={{ color: 'gold' }}>Add a new recipe</h2>
            <br />
            <div className='container'>
                <form className='form' onSubmit={onSubmitHandler}>
                    <div className='input-group'>

                        <label className='input-group-text'> Name:</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className='form-control' /></div>
                    {errors.name && <p style={{ color: 'firebrick' }}>{errors.name}</p>}
                    <br />
                    <br />
                    <div className='input-group'>
                        <label className='input-group-text'> Image: </label>
                        <input type="url" name="url" value={img} onChange={(e) => setImg(e.target.value)} className='form-control' />
                    </div>
                    {errors.img && <p style={{ color: 'firebrick' }}>{errors.img}</p>}
                    <br />
                    <br />
                    <div className='input-group'>
                        <label className='input-group-text'>Meal Type: </label>
                        <select name="type" value={type} onChange={e => setType(e.target.value)}>
                            <option hidden>Choose a Type</option>
                            <option value={"breakfast-brunch"}>Breakfast/ brunch</option>
                            <option value={"bread"}>Bread</option>
                            <option value={"main-dishes"}>Main Dishes</option>
                            <option value={"desserts"}>Desserts</option>
                            <option value={"drinks"}>Drinks and Smoothies</option>
                            <option value={"starters"}>Starters and Small Plates</option>
                            <option value={"soups"}>Soups and Salads</option>
                        </select>
                    </div>
                    {errors.type && <p style={{ color: 'firebrick' }}>{errors.type}</p>}
                    <br />
                    <br />
                    <div className='input-group'>
                        <label className='input-group-text'> Instruction:</label>
                        <input type="instruction" name="instruction" value={instruction} onChange={(e) => setInstruction(e.target.value)} className='form-control' />
                    </div>
                    {errors.instruction && <p style={{ color: 'firebrick' }}>{errors.instruction}</p>}
                    <br />
                    <br />
                    <div className='input-group'>
                        <label className='input-group-text'> Ingredient:</label>
                        <input type="ingredients" name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} className='form-control' />
                    </div>
                    {errors.ingredients && <p style={{ color: 'firebrick' }}>{errors.ingredients}</p>}
                    <br />
                    <br />
                    <div className='input-group'>
                        <label className='input-group-text'> Notes:</label>
                        <input type="notes" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} className='form-control' />
                    </div>
                    <br />
                    <button type='submit' className="btn btn-success mr-1" href="#">Add Recipe</button>
                    <br />
                    <br />
                </form>
            </div>
            {/* {
                errors.map((err, i) => {
                    return (
                        <p style={{ color: 'red' }}>{err}</p>
                    )
                })
            } */}

        </div>
    )
}

export default Create