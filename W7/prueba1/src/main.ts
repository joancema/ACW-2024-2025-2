import './style.css'
import axios from 'axios'

const prueba = axios.get('https://jsonplaceholder.typicode.com/posts')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<div id='contenido'><</div>`

const contenido = document.querySelector<HTMLDivElement>('#contenido')!
prueba.then((res) => {
    res.data.forEach((element: any) => {
        contenido.innerHTML += `<h2>${element.title}</h2><p>${element.body}</p>`
    });
})




