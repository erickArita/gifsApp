import React from 'react'
import { useFetchGifs } from '../hooks/useFetchgifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ category }) => {
    // hook personalizado
    const { data: images, loanding } = useFetchGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {loanding && <p> cargando</p>}
            <div className='card-grid'>

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
