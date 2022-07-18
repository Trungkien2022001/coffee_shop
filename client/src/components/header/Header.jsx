import React from 'react'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom'
export const Header = () => {
  return (
    <div className='header-container'>
        <div className="name">
            BK COFFEE
        </div>
        <div className="title">
            Hãy đến với bk coffee, bạn sẽ tận hưởng những thứ tốt đẹp nhất
        </div>
        <div className="btn">
            <div className="userBtn">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <Link to = './cart'>
                <div className="cartBtn">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </Link>
        </div>
    </div>
  )
}
