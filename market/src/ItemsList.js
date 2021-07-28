import React from 'react'

export default function ItemsList(props){
    const { items, sort } = props

    const onSort = event => {
        event.preventDefault();
        sort();
    }

    return(
        <div className='items-list'>
            <h2>Items List</h2>
            <select
                // id = 'sort-dropdown'
                // onChange = {onSort}
                // value = {values.sort}
                // name = 'sort'
            >
                <option value = "">- Sort By -</option>
                <option value = "first_name">Title</option>
                <option value = "price">Price</option>
            </select>
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