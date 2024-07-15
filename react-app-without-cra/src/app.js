import { sum } from './lib/sum.js';
import { divide } from './lib/divide.js';
import { multiply } from './lib/multiply.js';
import {subtract} from './lib/subtract.js';

console.log(sum(1, 2));
console.log(divide(1, 2));
console.log(multiply(1, 2));
console.log(subtract(1, 2));

const App = () => {
    return <h1>HELLO REACT WORLD</h1>
}

ReactDOM.render(
<App/>,
document.getElementById('root')
)