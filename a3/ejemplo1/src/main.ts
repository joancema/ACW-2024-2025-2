import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <label>Identificación del usuario</label>
  <!-- <input type="text" id="txtidentificacion" value="1350099659"/> -->
  <input type="text" id="txtidentificacion" value="1760001040001"/>
  <!-- <input type="text" id="txtidentificacion" value="1790085783001"/> -->
  <div id="estado"></div>
  <button id="btnvalidar">Validar</button>
`
const txtidentificacion = document.querySelector<HTMLInputElement>('#txtidentificacion')!
const btnvalidar = document.querySelector<HTMLButtonElement>('#btnvalidar')!
const estado = document.querySelector<HTMLDivElement>('#estado')!

btnvalidar.onclick = ()=>{

  const numerosDeLaIdentificacion= txtidentificacion.value.split("");
  let  coeficiente=(numerosDeLaIdentificacion[2]=="9")?"432765432":
        (numerosDeLaIdentificacion[2]=="6")?"32765432": "212121212";
  let acumulador=0;
  for (let elementoCoeficiente in coeficiente.split(""))
  {
    let multiplicacion=parseInt(numerosDeLaIdentificacion[elementoCoeficiente])*parseInt(coeficiente[elementoCoeficiente])
    if (parseInt(numerosDeLaIdentificacion[2])<6 && multiplicacion>9) multiplicacion-=9;
    acumulador+=multiplicacion;
  }
  const modulo=parseInt(numerosDeLaIdentificacion[2])<6?10:11
  if ((modulo-acumulador%modulo)==parseInt(numerosDeLaIdentificacion[coeficiente.length]))
    estado.innerHTML="Identificación válida"
  else
    estado.innerHTML="Identificación inválida"




  // let acumulador=0;
  // for (let i=0;i<9;i++)
  // {
  //   let numeroAAcumular=0;
  //   if (i%2==0)
  //     numeroAAcumular= parseInt(numerosDeLaIdentificacion[i])*2
  //   else
  //     numeroAAcumular+= parseInt(numerosDeLaIdentificacion[i])
  //   if (numeroAAcumular>9)
  //     numeroAAcumular-=9
  //   acumulador+=numeroAAcumular
  // }
  // const residuo= 10-acumulador%10
  // if (residuo === parseInt(numerosDeLaIdentificacion[9]))
  //   estado.innerHTML="Cédula válida"
  // else
  // estado.innerHTML="Cédula inválida"




// acumulador+= (i%2==0)?parseInt(numerosDeLaIdentificacion[i])*2:parseInt(numerosDeLaIdentificacion[i])
  // console.log(numerosCedula)
  // for (let i=0;i<9;i++){
  //   console.log(txtidentificacion.value.charAt(i))
  // }
  

}


// console.log(txtid.value)

