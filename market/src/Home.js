import React from 'react'

export default function Home(){
    return(
        <div className="home">
            <div className="home-header">
                <nav>
                    <h1>African Marketplace</h1>
                    <div className="nav-links">
                        <Link>Home</Link>
                        <Link>Log In</Link>
                        <Link>Items</Link>
                    </div>
                </nav>
            </div>
            <div className="home-body">
                <div>
                    <img 
                    className=""
                    src="https://media.istockphoto.com/photos/fruit-and-vegetable-market-picture-id160342236?k=6&m=160342236&s=612x612&w=0&h=JRs8uuwUJRTfVJKJWZd1OKd6-6zqHeUmgL7PzAqCeHs="
                    alt=''
                    />
                </div>
                <div className="home-buttons">
                    <button>
                        Log In
                    </button>
                    <button>
                        Items
                    </button>
                </div>
            </div>
        </div>
    )
}