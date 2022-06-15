import { useEffect } from 'react';
import '../sass/pages/about.scss'
import NavBar from './navBar';
// import axios from "axios";



const baseUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA3fw0LJXfQ87FtMSvqLdy5wGCKhjZkmLA&callback=initMap"

const About = () => {
    
    useEffect(() => {   //Consumir script externo
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "getSelo";
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA3fw0LJXfQ87FtMSvqLdy5wGCKhjZkmLA&callback=initMap";
        script.async = true;
        document.body.appendChild(script);

        /* axios.get(baseUrl) // consertar depois
            .then(() =>{
                function initMap() {
                    const uluru = { lat: -2.537157, lng: -44.294482 };
                    const map = new google.maps.Map(document.getElementById("map"), {
                      zoom: 18,
                      center: uluru,
                    });
                    const marker = new google.maps.Marker({
                      position: uluru,
                      map: map,
                    });
                  }
                  window.initMap = initMap;
                console.log('SIM, CONSUMIU')
            })
            .catch(() => {
                console.log('não consumiu')
            })
        return () => {
            document.body.removeChild(script)
        }; */
      }, []);

    return (
        <div className="about">
            <header className='header'>
                <h1>Informações</h1>
            </header>
           <div className="social-media">
                <a href="#" className='whatsapp'>
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
                <span>Rua Caminho da Boiada, 224 - Centro, 65025-200</span>
                <hr />
            </div>
            <div id="map"></div>
            < NavBar /> 
        </div>
    );
}
 
export default About;