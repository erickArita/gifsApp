import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch Man'])


    return (

        <>

            <h2>GifExpertApp</h2>
            {/* input */}
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(cat =>
                        <GifGrid category={cat} key={cat} />
                    )
                }
            </ol>
        </>

    )
}
