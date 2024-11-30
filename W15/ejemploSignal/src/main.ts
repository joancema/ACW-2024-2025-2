import './style.css';
import { createSignal, efect } from './library/custom-signal';

const [count, setCount] = createSignal(1);

efect(() => console.log(count())); 

setCount(3);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Muchas gracias</h1>
`;