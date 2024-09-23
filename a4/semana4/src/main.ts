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


const frmvoto = document.createElement('form')
frmvoto.innerHTML = `
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
`

divcontenido.appendChild(frmvoto)


// <select>
//   <option value="1">opcion1</option>
//   <option value="2">opcion2</option>
//   <option = value="3">opcion3</option>
// </select>


ciudadanos.forEach((ciudadano: ICiudadano) => {
  const option = document.createElement('option')
  option.value = ciudadano.id.toString()
  option.textContent = ciudadano.nombre
  // document.querySelector<HTMLSelectElement>('#ciudadano')!.appendChild(option)
  frmvoto.ciudadano.appendChild(option)
})

frmvoto.pregunta.innerHTML += preguntas.map((pregunta) => 
  `<option value="${pregunta.id}">${pregunta.pregunta}</option>`
).join('')


// const resultadox= ('hola como estas').split("") // ['hola', 'como', 'estas']
// resultadox.join(" ") // 'hola como estas'

frmvoto.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e.target)
  const idCiudadano = frmvoto.ciudadano.value;
  const idPregunta = frmvoto.pregunta.value;
  const voto = frmvoto.voto.value;
  console.log(idCiudadano, idPregunta, voto)
  const ciudadano = ciudadanos.find((ciudadano) => ciudadano.id === parseInt(idCiudadano))!;
  const pregunta = preguntas.find((pregunta) => pregunta.id === parseInt(idPregunta))!;
  const id = votos.length + 1;
  const votoNuevo = { id, ciudadano, pregunta, voto }
  votos.push(votoNuevo)
  const tr = document.createElement('tr')
  tr.innerHTML = `
    <td>${votoNuevo.id}</td>
    <td>${votoNuevo.ciudadano.nombre}</td>
    <td>${votoNuevo.pregunta.pregunta}</td>
    <td>${votoNuevo.voto}</td>
    <td>
      <button>Editar</button>
      <button>Eliminar</button>
    </td>
  `
  tabla.appendChild(tr)
})


tabla.addEventListener('click', (e) => {
  if (!(e.target instanceof HTMLButtonElement)){
    return;
  }
  const boton = e.target;
  if ( boton.textContent === 'Editar'){
    const tr = boton.parentElement?.parentElement;
    const id =  parseInt(tr?.firstElementChild?.textContent || '0');
    const voto = votos.find((voto) => voto.id === id);
    frmvoto.ciudadano.value = voto?.ciudadano.id.toString();
    frmvoto.pregunta.value = voto?.pregunta.id.toString();
    frmvoto.voto.value = voto?.voto;
  } 
  if ( boton.textContent === 'Eliminar'){
    const tr = boton.parentElement?.parentElement;
    const id = parseInt(tr?.firstElementChild?.textContent || '0');
    const index = votos.findIndex((voto) => voto.id === id);
    votos.splice(index, 1);
    console.log(votos)
    // const votos = votos.filter((voto) => voto.id !== id);
    tr?.remove();
  }
})


// <table>
//   <tr>
//     <td>1</td>
//     <td>John</td>
//     <td>
//       <button>Editar</button>
//       <button>Eliminar</button>
//     </td>
//   </tr>
// </table>






