import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
export const Header = () => {
  return (
    <div className='header-container'>
        <Link style={{color:'black', textDecoration:'none'}} to={'/'}>
            <div className="name">
                BK COFFEE
            </div>
        </Link>
       
        <div className="title">
            Hãy đến với bk coffee, bạn sẽ tận hưởng những thứ tốt đẹp nhất. One love, one future
        </div>
        <div className="btn">
        <Link style={{color:'black'}} to = '/admin'>
                <div className="cartBtn">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </Link>
            <Link style={{color:'black'}} to = '/cart'>
                <div className="cartBtn">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </Link>
        </div>
    </div>
  )
}
