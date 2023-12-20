import Image from 'next/image'

import Boton from './components/boton'
import Componente1 from './components/componente1'

export default function Home() {
  return (
    <main >
      <Componente1
        min={0} max={100}
      ></Componente1>

    </main>
  )
}
