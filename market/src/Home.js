import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home(){
    
    const history = useHistory()
    const routeToItems = () => {
        history.push('items-list')
    }
    
    return(
        <div className="home">
            <div className="home-body">
                <div>
                    <img 
                    className="body-image"
                    src="https://media.istockphoto.com/photos/fruit-and-vegetable-market-picture-id160342236?k=6&m=160342236&s=612x612&w=0&h=JRs8uuwUJRTfVJKJWZd1OKd6-6zqHeUmgL7PzAqCeHs="
                    alt=''
                    />
                </div>
                <button
                    onClick={routeToItems}
                    className='items-button'
                    >
                    Items List
                    </button>
            </div>
        </div>
    )
}