import { useState } from "react"

export const Clicker = ( {init} ) => {
    const [counter, setCounter] = useState (init)
    console.log(counter)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(init)
    }

    return(
        <div>
            <h2>Faltas del alumno</h2>

            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={reset}>Resetear</button>
            <p>{counter}</p>
            <hr />
        </div>
    )
}