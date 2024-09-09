import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <label>Identificación del usuario</label> <input type="text" id="txtidentificacion" value="123123123"/>
  <button id="btnvalidar">Validar</button>
`



const txtidentificacion = document.querySelector<HTMLInputElement>('#txtidentificacion')!
const btnvalidar = document.querySelector<HTMLButtonElement>('#btnvalidar')!
btnvalidar.onclick = ()=>{
  alert(txtidentificacion.value)
}


// console.log(txtid.value)

