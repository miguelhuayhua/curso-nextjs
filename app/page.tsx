import Image from 'next/image'

import Boton from './components/boton'

export default function Home() {
  return (
    <main >
      <p>hola</p>
      <div className='row'>
        <div className="col-6">
          <button className='btn btn-danger w-100'>boton</button>
        </div>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>
        <Boton></Boton>

      </div>
    </main>
  )
}
