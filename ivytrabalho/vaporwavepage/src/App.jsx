import {useState} from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <main>
    <section id='window' className="window">
  <div className="title-bar">
    <span>ivyoliveira.exe</span>
  </div>

  <div className="content">
    Genshin builds  ୭ ˚. ₍ᐢ. .ᐢ₎ ₊˚⊹♡
  </div>
</section>
<input type="text" class="campo" placeholder="Digite sua pesquisa..." />
<button class="pesquisar">Pesquisar</button>
  </main>
    </>
  )
}