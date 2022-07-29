import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// 2. display info on load (useEffect)
// 1. get id from params (useParams)
// 3. for the info: useState
// 4. grab info from backend: axios
const Spaghetti = () => {

    return (
        <div className="container">
            <img src="/images/spaghetti.jpg"></img>
            <p>Ingrediets:whole-wheat spaghetti: Start with dry spaghetti (which is almost always vegan). I prefer whole wheat, but any kind you like will do.
                Marinara Sauce: Either make your own following the linked recipe or use your favorite store brand.
                TVP crumbles (Textured Vegetable Protein): See notes above if you're unfamiliar with TVP. You could substitute crumbled tofu, but it wouldn't have the same meaty texture.
                water: This will help the TVP rehydrate.
                balsamic glaze: Along with the seasonings below, adding some additional flavor will make up for the neutral taste of the TVP. You might need to adjust somewhat depending on the type of tomato sauce you use.
                garlic powder
                dried oregano
                dried basil</p>
            <p>Instruction:
                Bring a large pot of salted water to a boil. When the water starts to boil, add the spaghetti and cook for 7 to 9 minutes (or as directed on the package) until the spaghetti is al dente.
                Right after you start the water, add your sauce, ¾ cup water, TVP, and other seasonings to a medium pot. Heat the sauce over medium heat until the sauce starts to simmer. Turn the heat down to low and cook for 10 to 15 minutes, or until your pasta is done. Be sure to keep the lid on the pot while it simmers--otherwise, things can get messy!
                Drain the pasta. Add the sauce and mix to combine. Or plate the pasta and spoon the sauce over the top. Serve with vegan parmesan, fresh basil, and red pepper flakes. Enjoy!
            </p>
        </div>
    )
}
export default Spaghetti;