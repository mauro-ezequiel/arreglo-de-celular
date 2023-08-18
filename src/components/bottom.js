
import '../style/bottom.css';

function Bottom (){
    return(

        <section>
        <div id='container'>
            <div className='row'>
             <div className="col-lg-7 ">
             <div className='name'>
            <h1 className='name__my'> Mauro Quispe</h1>
            <h2 id='information'>you can contact me by: whatsapp/github</h2>
          </div>
             </div>
             <div className="col-lg-5">
                <div className='text'>

                <a href='https://github.com/mauro-ezequiel' target='-blank'>
                <i class="bi5 bi-github"></i>
                </a>

             <a href='https://www.facebook.com/profile.php?id=100088989336658' target='-blank'>
              <i class="bi5 bi-facebook"/> 
             </a>
             <a href='https://wa.me/541150941389'
             target='-blank'>
             <i class="bi5 bi-whatsapp"/>
             </a>
             <a href='https://www.instagram.com/'target='-blank'>
             <i class="bi5 bi-instagram"/>
            </a>
            <a href='https://mail.google.com/mail/u/0/#search/from%3A%40jooble.org+in%3Aanywhere/FMfcgzGtwCtTwJMFtBCXBlHLrcdTZmpk'target='-blank'>
            <i class="bi5 bi-envelope-at-fill"></i>
            </a>
             </div>
             </div>

         
             </div>
          </div>
          
          </section>

    );
}

export default Bottom;