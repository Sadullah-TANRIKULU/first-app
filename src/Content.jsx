//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

// localden resim çekemiyoruz import etmek gerekiyor

import img from './assets/1641539838089.jpg'
import './Content.css'

const Content = () => {

    const pStyle ={
        backgroundColor: 'lime'
    };

    return (
        <div className='content'>
        <h3>Content Component</h3>
        <p style={pStyle} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, illum.</p>

        <img src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg" alt="roses" style={{width: '600px'}} />

        <img src={img} alt="myCat" style={{width: '600px'}} />

        <p className='lorem40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum dignissimos minus odit esse minima exercitationem quisquam consequuntur, eius nisi quaerat debitis id delectus eligendi, rem, dolor enim odio provident saepe omnis numquam ullam ad nesciunt! Voluptatum, magnam eos. Veritatis!</p>
        </div>
    )
}

export default Content;