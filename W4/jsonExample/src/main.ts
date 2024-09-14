import './style.css'
import { ciudadanos, preguntas, votos } from './data'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="divlistado">
  </div>
`
const divlistado = document.querySelector<HTMLDivElement>('#divlistado')!
// add a table to the div with id divlistado and add a row for each vote
const table = document.createElement('table')
table.innerHTML = `
  <tr>
    <th>Id</th>
    <th>Ciudadano</th>
    <th>Pregunta</th>
    <th>Voto</th>
    <th>Acciones</th>
  </tr>
`
votos.forEach(voto => {
  table.innerHTML += `
    <tr>
      <td>${voto.id}</td>
      <td>${voto.ciudadano.id}-${voto.ciudadano.nombre} ${voto.ciudadano.apellido}</td>
      <td>${voto.pregunta.id}-${voto.pregunta.pregunta}</td>
      <td>${voto.voto}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
    </tr>
  `
})
divlistado.appendChild(table)
// add a form to vote
const form = document.createElement('form')
form.innerHTML = `
  <label for="ciudadano">Ciudadano</label>
  <select id="ciudadano" name="ciudadano">
  <option value="0">Seleccione un ciudadano</option>
  </select>
  <label for="pregunta">Pregunta</label>
  <select id="pregunta" name="pregunta">
  <option value="0">Seleccione una pregunta</option>
  </select>
  <label for="voto">Voto</label>
  <input type="text" id="voto" name="voto">
  <button type="submit">Votar</button>
  `
ciudadanos.forEach(ciudadano => {
  const option = document.createElement('option')
  option.value = ciudadano.id.toString()
  option.text = `${ciudadano.nombre} ${ciudadano.apellido}`
  form.querySelector<HTMLSelectElement>('#ciudadano')!.add(option)
})
preguntas.forEach(pregunta => {
  const option = document.createElement('option')
  option.value = pregunta.id.toString()
  option.text = pregunta.pregunta
  form.querySelector<HTMLSelectElement>('#pregunta')!.add(option)
})
divlistado.appendChild(form)
// add a listener to the form
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const ciudadanoId = form.querySelector<HTMLSelectElement>('#ciudadano')!.value
  const preguntaId = form.querySelector<HTMLSelectElement>('#pregunta')!.value
  const voto = form.querySelector<HTMLInputElement>('#voto')!.value
  if (ciudadanoId && preguntaId && voto) {
    votos.push({
      id: votos.length + 1,
      ciudadano: ciudadanos.find(ciudadano => ciudadano.id === +ciudadanoId)!,
      pregunta: preguntas.find(pregunta => pregunta.id === +preguntaId)!,
      voto: voto
    })
    table.innerHTML += `
      <tr>
        <td>${votos.length}</td>
        <td>${ciudadanos.find(ciudadano => ciudadano.id === +ciudadanoId)!.nombre} ${ciudadanos.find(ciudadano => ciudadano.id === +ciudadanoId)!.apellido}</td>
        <td>${preguntas.find(pregunta => pregunta.id === +preguntaId)!.pregunta}</td>
        <td>${voto}</td>
        <td>
          <button>Editar</button>
          <button>Eliminar</button>
      </tr>
    `
  }
})

// add a listener to the table to edit or delete a vote
table.addEventListener('click', (e) => {
  const target = e.target as HTMLElement
  if (target.tagName === 'BUTTON') {
    const tr = target.parentElement!.parentElement!
    const id = +tr.children[0].textContent!
    if (target.textContent === 'Editar') {
      const ciudadanoId = tr.children[1].textContent?.split('-')[0]
      const preguntaId = tr.children[2].textContent?.split('-')[0]
      const voto = tr.children[3].textContent
      form.querySelector<HTMLSelectElement>('#ciudadano')!.value = ciudadanoId!
      form.querySelector<HTMLSelectElement>('#pregunta')!.value = preguntaId!
      form.querySelector<HTMLInputElement>('#voto')!.value = voto!

    } else if (target.textContent === 'Eliminar') {
      votos.splice(votos.findIndex(voto => voto.id === id), 1)
      tr.remove()
    }
  }
})



