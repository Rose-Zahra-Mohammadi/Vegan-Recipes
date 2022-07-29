import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Main = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes/picks')
            .then(res => setRecipes(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div className='container'>
                <p className='p-3 mb-2 bg-success text-white'>Plant-bacsed diets are <a className='link-warning' href='https://www.whatthehealthfilm.com'>Healty</a>, <a className='link-warning' href='https://www.cowspiracy.com'>enviroment-friendly</a>, <a className='link-warning' href='https://www.dominionmovement.com/watch' >cruelty-free</a>, and really yummy! Our collection has more than 20 real-people-tested vegan recipes for cooking and baking. Don't forget dessert!</p>
                <div className='img-with-text'>
                    <div className='th'> <Link className='link-dark' to={`/breakfast-brunch`}><img src="/images/breakfast.jpg" alt="Breakfast" />
                        <p>Breakfast and Brunch</p></Link>
                    </div>
                    <div className='th'> <Link className='link-dark' to={`/bread`}><img src="/images/bread.jpg" alt="Bread" />
                        <p>Whole wheat Bread</p></Link>
                    </div>
                    <div className='th'> <Link className='link-dark' to={`/main-dishes`}><img src="/images/main.jpg" alt="Main" />
                        <p>Main Dishes</p></Link>
                    </div>
                    <div className='th'><Link className='link-dark' to={`/desserts`}><img src="/images/dessert.jpg" alt="Dessert" />
                        <p>Desserts</p></Link>
                    </div>
                    <div className='th'><Link className='link-dark' to={`/drinks`}><img src="/images/smoothies.jpg" alt="Dessert" />
                        <p>Drinks and Smoothies</p></Link>
                    </div>
                    <div className='th'><Link className='link-dark' to={`/starters`}><img src="/images/starter.jpg" alt="starter" />
                        <p>Starter and Small Plates</p></Link>
                    </div>
                    <div className='th'><Link className='link-dark' to={`/soups`}><img src="/images/salad.jpg" alt="Soups and Salads" />
                        <p>Soups and Salads</p></Link>
                    </div>
                </div>
                <br />
                <h3>Community Picks</h3>
                {/* <div>
                    {
                        recipes.map((recipe, i) => {
                            return (
                                <div key={i}>
                                    <div><Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link></div>
                                    <div>{recipe.img}</div>
                                </div>
                            )
                        })
                    }
                </div> */}
                <div className='img-with-text2'>

                    <div className='th'> <Link className='link-success' to={`/recipe/:id`}><img src="/images/shepard's pie.jpg" alt="Shepard's Pie" />
                        <p>Shepard's Pie</p></Link>
                    </div>
                    <div className='th'> <Link className='link-success' to={`/spaghetti`}><img src="/images/spaghetti.jpg" alt="Spaghetti" />
                        <p>Spaghetti</p></Link>
                    </div>
                    <div className='th'> <Link className='link-success' to={`/recipe/:id`}><img src="/images/tofu.jpg" alt="Tofu" />
                        <p>Crispy Chilli Tofu</p></Link>
                    </div>
                    <div className='th'><Link className='link-success' to={`/recipe/:id`}><img src="/images/green salad.jpg" alt="Green Salad" />
                        <p>Green Salad</p></Link>
                    </div>
                </div>
            </div >
        // </div >
    )
}

export default Main