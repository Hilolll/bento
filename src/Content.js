import React from 'react'

export default function Content() {
  return (
    <div className='body__content'>

        <div className='body__first-blog'>
            <div className='body__first-part'>
                <div className='body__artist'> <img src={"./img/flowe-icon.png"}></img> <p>Artist Redefining <br></br> Architecture with  AI-Driven Design</p></div>
                <div className='body__artist__image'><img src={"./img/Portrait.png"}></img></div>
            </div>
            <div className='body__second-part'>
                <div className='body__second-part__text'><img src={"./img/Vector 2.png"}></img><p>Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.</p></div>
                <a href={'https://t.me/hilllllllol'} className='body__second-part__feedback'><a className='body__second-part__feedback__pointer' href={'https://t.me/hilllllllol'}>Have some  questions ? 
                <img src={"./img/Vector.png"}></img></a>Contact Me</a>
            </div>
        </div>

        <div className='body__second-blog'>

        <div className='body__second-blog__link'>

          <div className='second-blog__link__first-section'><a href={'https://t.me/hilllllllol'} className='musea'>Musea</a>
          <img src={"./img/Vector.png"}></img> </div>

          <div className='second-blog__link__second-section'>
          <img src={"./img/social-img.png"}></img>
          </div>

            <p className='second-blog__link__third-section'>Elara</p>
          
            <p className='second-blog__link__fourth-section'>Verve</p>

            <p className='second-blog__link__fifth-section'>Zephyr</p>
          

        </div>

        <div className='body__second-blog__socials'>
        <a href={'https://t.me/hilllllllol'}>Instagram</a>
        <a href={'https://t.me/hilllllllol'}>X</a>
        <a href={'https://t.me/hilllllllol'}>LinkedIn</a>
        </div>

        </div>
    </div>
  )
}
