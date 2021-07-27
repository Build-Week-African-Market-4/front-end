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
                src={item.avatar}
                alt={item.first_name}
                />
                <p>{item.first_name}</p>
                <p>${item.last_name}</p>
                </div>
            ))}
        </div>
    )
}