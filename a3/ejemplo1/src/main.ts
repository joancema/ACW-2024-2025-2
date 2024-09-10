import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <label>Identificación del usuario</label>
  <input type="text" id="txtidentificacion" value="1350099659"/>
  <div id="estado"></div>
  <button id="btnvalidar">Validar</button>
`
const txtidentificacion = document.querySelector<HTMLInputElement>('#txtidentificacion')!
const btnvalidar = document.querySelector<HTMLButtonElement>('#btnvalidar')!
const estado = document.querySelector<HTMLDivElement>('#estado')!

btnvalidar.onclick = ()=>{

  const numerosDeLaIdentificacion= txtidentificacion.value.split("");


  let  coeficiente="212121212";
  
  

  if (numerosDeLaIdentificacion[3]=="9")
  {
    coeficiente="432765432";
  }
  if (numerosDeLaIdentificacion[3]=="6")
  {
    coeficiente="32765432";
  }




  let acumulador=0;
  for (let i=0;i<9;i++)
  {
    let numeroAAcumular=0;
    if (i%2==0)
      numeroAAcumular= parseInt(numerosDeLaIdentificacion[i])*2
    else
      numeroAAcumular+= parseInt(numerosDeLaIdentificacion[i])
    if (numeroAAcumular>9)
      numeroAAcumular-=9
    acumulador+=numeroAAcumular
    // acumulador+= (i%2==0)?parseInt(numerosDeLaIdentificacion[i])*2:parseInt(numerosDeLaIdentificacion[i])
  }
  const residuo= 10-acumulador%10
  if (residuo === parseInt(numerosDeLaIdentificacion[9]))
    estado.innerHTML="Cédula válida"
  else
    estado.innerHTML="Cédula inválida"




  // console.log(numerosCedula)
  // for (let i=0;i<9;i++){
  //   console.log(txtidentificacion.value.charAt(i))
  // }
  

}


// console.log(txtid.value)

