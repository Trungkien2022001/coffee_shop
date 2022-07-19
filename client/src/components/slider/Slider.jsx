import './slider.scss'
import { useState, useEffect } from 'react';
var timeId;

export const Slider = () => {
    const [index, setIndex] = useState(0) 
    useEffect(() => {
        timeId = setInterval(()=>{
            setIndex(index + 1 <=2 ? index + 1 : 0)
        }, 3000)
        return () => clearInterval(timeId)
    })
    return (
        <div className='slider padding___main'>
            <div className="wrapper">  
                <div className="sliders" style={{transform: `translateX(${-650 * index}px)`}}>
                    <img style={{width: "800px"}} className='slide-item' src="https://thietkehaithanh.com/wp-content/uploads/2013/07/thietkehaithanh-banner2-800x250.jpg" alt="" />
                    <img style={{width: "800px"}} className='slide-item' src="https://png.pngtree.com/background/20210711/original/pngtree-coffee-fresh-brown-poster-banner-background-picture-image_1069397.jpg" alt="" />
                    <img style={{width: "800px"}} className='slide-item' src="https://i.imgur.com/YaHaSly.jpg" alt="" />
                    <img style={{width: "800px"}} className='slide-item' src="https://sites.google.com/site/cosorangvaxaycaphevinhich/_/rsrc/1483004354242/home/banner-cafe.jpg" alt="" />
                    <img style={{width: "800px"}} className='slide-item' src="https://siho.vn/App_Themes/default/banner.jpg" alt="" />
                    <img style={{width: "800px"}} className='slide-item' src="https://capherangxay.vn/wp-content/uploads/2021/09/WEB-BANNER-XE-INOX-1.jpg" alt="" />
                </div>
            </div>
                 
        </div>
    )
}
