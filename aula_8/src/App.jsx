import './App.css';
import city from './assets/city.jpg';
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";




function App() {

  return (
  <>

    <div className="App">
      <h1>Seção 3</h1>
    </div>

    <div>+
        {/* Imagem localizada na pasta public */}
      <img src="/img1.jpg" alt="Paisagem" />

      {/* Imagem importada de src/assets*/}
      <img src={city} alt="cidade" />
      
    </div>

    <ManageData />
    <ListRender />
    <ConditionalRender />
    
    
    {/* props */}
    <ShowUserName name="Allan Henrique" />

    {/* destructuring */}
<CarDetails brand="Ford" color="Azul" km={10000} />

{/* reaproveitamento */}
<CarDetails brand="VW" color="Vermelho" km={535} />
<CarDetails brand="Fiat" color="Branco" km={0} />


    </>
  )

}

export default App
