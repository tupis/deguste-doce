import '../sass/pages/about.scss'
import Map from './map'

const About = () => {
    return (
        <div className="about">
            <header className='header'>
                <h1>Informações</h1>
            </header>
           <div className="social-media">
                <a href="https://api.whatsapp.com/send?phone=5598988362009" className='whatsapp'>
                    <div>
                        <span>Whatsapp</span>
                        <p>+55 (98) 9 8821-6619</p>
                    </div>
                    <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png" alt="instagram-logo" />
                </a>
                <hr />
                <a href="https://www.instagram.com/deguste_doces/" className="instagram" target='_blank'>
                    <div>
                        <span>Instagram</span>
                        <p>@deguste_doce</p>
                    </div>
                        <img src="https://i.ytimg.com/an/7FBYiyn6_Kw/421763da-f3a5-4fd6-8d31-d41bfb1b4f0d_mq.jpg?v=58c5f57b" alt="" srcset="" />
                </a>
                <hr />
            </div>
            <div className="schedule">
                <span>Atendimento: </span>
                <span> Segunda à Domingo: 09:00 - 20:00</span>
            <hr />
            </div>
            <div className="location">
                <span>Endereço:</span>
                <span>Rua Caminho da Boiada, 221 - Centro, 65025-200</span>
                <hr />
            </div>
            < Map />
        </div>
    );
}
 
export default About;