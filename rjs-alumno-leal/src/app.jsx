import { Clicker } from "./clicker"
import { Usuario } from "./usuarios"

function App(){

    return(
        <div>
            <h2>React JS</h2>
            <hr/>

            <Usuario nombre="Juan Cruz Leal" curso="ReactJS" edad={19} rol="Alumno" estado="Activo"/> <Clicker init={1}/>
            <Usuario nombre="Tobias Diaz" curso="ReactJS" edad={21} rol="Alumno" estado="Activo"/> <Clicker init={2}/>
            <Usuario nombre="Octavio Nehuen" curso="ReactJS" edad={17} rol="Alumno" estado="Activo"/> <Clicker init={0}/>
        </div>
    )
}

export default App