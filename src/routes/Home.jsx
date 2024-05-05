import {} from 'react';
import '../Scss/Home.scss'
import Violao1 from '../assets/violao1.svg'
import Violao2 from '../assets/violao2.svg'
import Violao3 from '../assets/violao3.svg'
import Violao4 from '../assets/violao4.svg'
import Violao5 from '../assets/violao5.svg'


function Home() {
  return (
    <>
    <section id='home'>
      <div id='cont-home'>
        <h1>Fullfilling dreams with strings attached</h1>
      </div>
    </section>

    <section id='equipment'>
      
      <div id='tittle-equipment'>
        <h2>Equipamentos</h2>
      </div>

      <div id='cards-line1'>

        <div className='card1'>
            <img src={Violao1} alt="" />
            <div id='info-card'>
              <h3>Article Title</h3>
              <p>Article Subhead</p>
            </div>
            
        </div>

        <div className='card1' id='a2'>
            <img src={Violao2} alt="" />
            <div id='info-card'>
              <h3>Article Title</h3>
              <p>Article Subhead</p>
            </div>
        </div>

      </div>
      <div id='cards-line2'>

          <div className='card2'>
            <img src={Violao3} alt="" />
              <div id='info-card'>
                <h3>Article Title</h3>
                <p>Article Subhead</p>
              </div>
          </div>

          <div className='card2' id='a2'>
            <img src={Violao4} alt="" />
              <div id='info-card'>
                <h3>Article Title</h3>
                <p>Article Subhead</p>
              </div>
          </div>

          <div className='card2'>
            <img src={Violao5} alt="" />
              <div id='info-card'>
                <h3>Article Title</h3>
                <p>Article Subhead</p>
              </div>
          </div>

      </div>
    </section>
    </>
  );
}

export default Home;
