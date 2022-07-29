import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'



const Food = () => {
    const { type } = useParams()
    const [foodlist, setFoodList] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/recipes/${type}`)
            .then(res => {
                console.log(res.data)
                setFoodList(res.data)
            })
            .catch(err => console.error(err))
    }, []);
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/recipes/${deleteId}`)
            .then(res => removeFromList(deleteId))
            .catch(err => console.log(err))
    }

    const removeFromList = (deleteId) => {
        const filteredList = foodlist.filter((eachFood, i) => {
            return (
                eachFood._id !== deleteId
            )

        })
        setFoodList(filteredList)
    }
    return (
        <div className={`${type} food`}>
            <p className='container bg-warning' style={{ color: 'black' }}> Yes, you can make different kinds of {type} at home. Check out our staff picks recipes or choose your own favorite!</p>
            <table className="table">
                <thead>
                </thead>
                <tbody>
                    {
                        foodlist.map((food, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ color: "violet" }}>
                                        {food.name}</td>
                                    <td><div class="btn-toolbar text-center well">
                                        <td><img src={food.img} alt="funny" /></td>
                                    </div></td>
                                    <td><div class="btn-toolbar text-center well">
                                        <td><Link to={`/recipe/${food._id}`} className="btn btn-success">View</Link></td>
                                    </div></td>
                                    <td><div class="btn-toolbar text-center well">
                                        <td><button className='btn btn-danger' onClick={e => handleDelete(food._id)}>Delete</button></td>
                                    </div></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >
            <button className='btn btn-warning'> <Link style={{ color: 'black' }} to={`/create`}>Add your own vegan {type}</Link></button>
        </div >

    )
}

export default Food