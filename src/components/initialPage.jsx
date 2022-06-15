import '../sass/pages/initialPage.scss'
import Category from './category';
import NavBar from './navBar';

//Fake Api
const category = {
    bolos: {
        name: "Bolos",
        products: {
            umKG: {
                name: "Bolo 1KG",
                description: "Contem pasta americana",
                price: 50,
                images: ['img1', 'img2']
            },
            cincoKG: {
                name: "Bolo 5KG",
                description: "Não contém pasta americana",
                price: 120,
                images: ['img1', 'img2']
            },
            dezKG: {
                name: "Bolo 10KG",
                description: "Não contém pasta americana",
                price: 300,
                images: ['img1', 'img2']
            }
        }
    },
    doces: {
        name: "Doces",
        products: {
            brigadeiro: {
                name: 'Brigadeiro',
                description: 'Brigadeiro',
                price: 1

            },
            cupcake: {
                name: "Cupcake",
                description: "os sabores são variados",
                price: 20
            }
        }
    },
    salgados: {
        name: 'Salgados',
        products: {
            centroSalgados: {
                name: "Centro de Salgados",
                description: "Você escolhe os tipos de salgados",
                price: 120
            },
            meioSalgados: {
                name: "Metade de um centro de Salgados",
                description: "Você escolhe os tipos de salgados",
                price: 60
            }
        }
    }
    
}

const InitialPage = () => {
    return (
        <>
        <header className='header'>
            <h1>Deguste Doce</h1>
        </header>

        < Category category={category.bolos}/>
        < Category category={category.doces}/>
        < Category category={category.salgados}/>

        < NavBar />
        </>
    );
}
 
export default InitialPage;