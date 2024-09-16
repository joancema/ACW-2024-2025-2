import './style.css'
import { ciudadanos, preguntas, votos } from './data'
import { ICiudadano, IVoto } from './interfaces'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="divcontenido"></div>
`

const divcontenido = document.querySelector<HTMLDivElement>('#divcontenido')!
const tabla = document.createElement('table')

divcontenido.appendChild(tabla)

tabla.innerHTML = `
  <tr>
    <th>ID</th>
    <th>Nombre</th>
    <th>Pregunta</th>
    <th>Voto</th>
    <th>Acciones</th>
  </tr>
`
votos.forEach((voto: IVoto) => {
  const tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${voto.id}</td>
    <td>${voto.ciudadano.nombre}</td>
    <td>${voto.pregunta.pregunta}</td>
    <td>${voto.voto}</td>
    <td>
      <button>Editar</button>
      <button>Eliminar</button>
    </td>
  `
  tabla.appendChild(tr)

})


divcontenido.innerHTML += `
  <form id="formvoto">
    <label for="ciudadano">Ciudadano</label>
    <select name="ciudadano" id="ciudadano">
      <option value="0">Ninguno</option>
    </select>
    <label for="pregunta">Pregunta</label>
    <select name="pregunta" id="pregunta">
      <option value="0">Ninguno</option>
    </select>
    <label for="voto">Voto</label>
    <select name="voto" id="voto">
      <option value="SI">SI</option>
      <option value="NO">NO</option>
    </select>
    <button type="submit">Votar</button>
  </form>
`

const formvoto = document.querySelector<HTMLFormElement>('#formvoto')!



