import React from 'react'

export default function Home(props){
    const { items } = props
    return(
        <div className="home">
            <div className="home-body">
                <div>
                    <img 
                    className=""
                    src="https://media.istockphoto.com/photos/fruit-and-vegetable-market-picture-id160342236?k=6&m=160342236&s=612x612&w=0&h=JRs8uuwUJRTfVJKJWZd1OKd6-6zqHeUmgL7PzAqCeHs="
                    alt=''
                    />
                </div>
            </div>
            <div className="items-list">
                <h2>Items</h2>
                {/* {items.map(item => (
                    <div
                    className="item-card"
                    key={item.id}
                    >
                    <img 
                    className="items-list-image"
                    src={item.imageUrl}
                    alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    </div> */}
            </div>
        </div>
    )
}