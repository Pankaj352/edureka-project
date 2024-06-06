import React from 'react'
import Wallpaper from './Wallpaper'
import QuickSearch from './QuickSearch'

const Home=() => {
    return (
        <div>
            <React.Fragment>
                <Wallpaper s2="pqr"/> 
                <QuickSearch/>
              
            </React.Fragment>
        </div>
    )
}

export default Home;