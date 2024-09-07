import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello Vite!</h1>
`
const app = document.querySelector<HTMLDivElement>('#app')!

// add a text
const txt: HTMLInputElement = document.createElement('input')
txt.name = 'txt'; 
txt.id = 'txt'
app.appendChild(txt)
const btn: HTMLButtonElement = document.createElement('button');
btn.id = 'btn'
btn.textContent = 'Click me'
app.appendChild(btn)

btn.addEventListener('click', () => {
  console.log(txt.value)
})





// const txtuser = document.querySelector<HTMLInputElement>('#txtuser')!
// const btn = document.querySelector<HTMLButtonElement>('#btn')!


