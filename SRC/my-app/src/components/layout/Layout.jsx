import React from 'react'


import Sidebar from '../sidebar/Sidebar'
import List from '../List.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <div> 
            <BrowserRouter>
                <Routes> 
                    <Route render ={(props) => (
                        <div className='layout'> <Sidebar {...props} />
                            <div className="layout_content">
                                <div className="layout_content-main"> <List /> </div>                             
                            </div>
                        </div>
                    )} />  
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
