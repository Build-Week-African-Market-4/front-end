import React from 'react'

export default function ItemsList(props){
    const { items } = props
    return(
        <div className='items-list'>
            <h2>Items List</h2>
            {items.map(item => (
                <div
                className='item-card'
                key={item.id}
                >
                <img 
                className='items-list-image'
                src={item.image}
                alt={item.title}
                />
                <p>{item.title}</p>
                <p>${item.price}</p>
                </div>
            ))}
        </div>
    )
}