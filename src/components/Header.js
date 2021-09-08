import { useState } from 'react'

import Navigation from './Navigation.js'
import MenuButton from './MenuButton.js'
import NavigationResponsive from './NavigationResponsive.js'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='Header'>
            
            <div className="header-container">
                <a href="/"><img id="my-logo" src="myLogo.png" alt="logo" /></a>
                <Navigation />
                <MenuButton
                    icon={showMenu ? <i class="fas fa-times fa-2x"></i> : <i class="fas fa-bars fa-2x"></i>} //X menu of true, hamburger if false
                    onClick={() => setShowMenu(!showMenu)} //toggle between true and false for onClick result
                />
            </div>

            {showMenu && <NavigationResponsive setShowMenu={setShowMenu} />}
        </header>
    )
}

export default Header
