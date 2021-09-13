import React from 'react'
import "./HomeView.css"
import Weather from '../../shared/api/wheater'

export const HomeView = () => {

    return (
        <div>
           <h1>Home Page</h1>
           <Weather/>
           
        </div>
      
    )
}
