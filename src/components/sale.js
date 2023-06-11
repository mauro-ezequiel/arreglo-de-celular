import Reac from "react";
import Card from "./products";
import iph11 from '../img/iph11.jpg';
import iph12 from '../img/iph12.jpg';
import iph13 from '../img/iph13.jpg';
import ipx from '../img/ipx.jpg';
import j7 from '../img/j7.jpg';
import j7prime from '../img/j7prime.jpg';
import note8 from '../img/note8.jpg';
import note9 from '../img/note9.jpg';
import note10 from '../img/note10.jpg';
import s8 from '../img/s8.jpg';
import s9 from '../img/s9.jpg';
import s10 from '../img/s10.jpg';



const Sale = () => {
 return(

    <>
    <div className='row'>

    <div className='col-md-3'>
   <Card
     image={iph11}
     title= "iphon 11"
     price= '50.000'
     paragraph= '128gb internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
    />
    </div>
    
    <div className='col-md-3'>
   <Card
     image={iph12}
     title= "iphone 12"
     price= '50.000'
     paragraph= '128gb internal memory 8gb RAM camera 60mpx  frontal camera28mpx'
    />
    </div>
    <div className='col-md-3'>
   <Card
     image={iph13}
     title= "iphone 13"
     price= '50.000'
     paragraph= '128gb  internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
    />
    </div>
    <div className='col-md-3'>
   <Card
     image={ipx}
     title= "iphone x"
     price= '50.000'
     paragraph= '128gb  internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
    />
    </div>
    </div>

<div className='row'>

<div className='col-md-3'>
<Card
 image={j7}
 title= "j7 neo"
 price= '50.000'
 paragraph= '128gb internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
/>
</div>

<div className='col-md-3'>
<Card
 image={j7prime}
 title= "J7 prime"
 price= '50.000'
 paragraph= '128gb internal memory 8gb RAM camera 60mpx  frontal camera28mpx'
/>
</div>
<div className='col-md-3'>
<Card
 image={note8}
 title= "xiaomi note 8"
 price= '50.000'
 paragraph= '128gb  internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
/>
</div>
<div className='col-md-3'>
<Card
 image={note9}
 title= "xiaomi note 9"
 price= '50.000'
 paragraph= '128gb  internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
/>
</div>

</div>

<div className='row'>

<div className='col-md-3'>
<Card
 image={note10}
 title= "xiaomi note 10"
 price= '50.000'
 paragraph= '128gb internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
/>
</div>

<div className='col-md-3'>
<Card
 image={s8}
 title= "samsung s8"
 price= '50.000'
 paragraph= '128gb internal memory 8gb RAM camera 60mpx  frontal camera28mpx'
/>
</div>
<div className='col-md-3'>
<Card
 image={s9}
 title= "samsung s9"
 price= '50.000'
 paragraph= '128gb  internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
/>
</div>
<div className='col-md-3'>
<Card
 image={s10}
 title= "samsung s10"
 price= '50.000'
 paragraph= '128gb  internal memory 8gb RAM camera 60mpx frontal camera 28mpx'
/>
</div>

</div>
</>



 );
}


export default Sale;