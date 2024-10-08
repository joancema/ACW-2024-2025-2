import { IPost } from './interface/IPost'
import './style.css'
import axios from 'axios'


const prueba = axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
console.log(prueba)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id='contenido'></div>
`

const contenido = document.querySelector<HTMLDivElement>('#contenido')!
prueba.then((res) => {
    res.data.forEach((element: IPost) => {
        contenido.innerHTML += 
        `<h2>${element.title}</h2>
        <p>${element.body}</p>
        <h3>${element.userId}</h3>
        `
    });
})

