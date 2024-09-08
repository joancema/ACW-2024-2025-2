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
  let txtValue = txt.value
  let txtValueArray = txtValue.split('')
  // validate input as a identification number from ecuador
  if (txtValueArray.length === 10) {
    let sum = 0
    for (let i=0; i< txtValueArray.length-1; i++) {
      const element = parseInt( txtValueArray[i])
      const elementNumber = i
      
      const currentValue=  elementNumber%2 === 0 ? element * 2 : element * 1
      if (currentValue > 9) {
        sum += currentValue - 9
      }
      else {
        sum += currentValue
      }
      console.log(elementNumber, currentValue)
    }
    while (sum > 10) {
      sum -= 10
    }
    alert (sum-10)
  }
})





// const txtuser = document.querySelector<HTMLInputElement>('#txtuser')!
// const btn = document.querySelector<HTMLButtonElement>('#btn')!


