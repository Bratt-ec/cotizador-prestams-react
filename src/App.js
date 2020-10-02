import React, { Fragment, useState} from 'react';
import './index.css';
import Header from'./componentes/Header';
import Formmulario from './componentes/Formulario';
import Resultado from  './componentes/Resultado';
import Mensaje from "./componentes/Mensaje";
import Spinner from "./componentes/Spinner";

function App() {
    // definir el state
    const [cantidad, guardarCantidad ] = useState(0);
    const [plazo, guardarPlazo ] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);

    let componente;
    if(cargando){
      componente = <Spinner />
    }
    else if(total === 0){
      componente =  <Mensaje />
    }else{
      componente =  <Resultado 
                    total = {total}
                    plazo = {plazo}
                    cantidad = {cantidad}
                    />
    }

  return (
    <Fragment>
        <Header  
          titulo ="Cotizador de prestamos"
        />
        <div className="container">
            <Formmulario 
              cantidad = {cantidad}
              guardarCantidad ={guardarCantidad}
              plazo = {plazo}
              guardarPlazo = {guardarPlazo}
              guardarTotal = {guardarTotal}
              guardarCargando = {guardarCargando}
            />
          <div className="mensajes">
            {componente}
          </div>
        </div>
    </Fragment>

  );
}

export default App;
