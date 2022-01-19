import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    return (
        <div>
            <Header />
                {/* { this.props.children } 
                anything else you want to appear on every page that uses this layout */}
            <Footer />
        </div>
    )
}

export default Layout