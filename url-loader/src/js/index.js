import '../css/index.css'
import '../js/search'
import search from '../js/search'
import render from '../js/render'
// import text from './text'

// text()

// if(module.hot){
//     module.hot.accept('./text.js',function(){
//         console.log('Recargardo en caliente')
//         text()
//     })
// }

const id = prompt('Quién es ese pokemon?')

search(id)
    .then((data) => {
        render(data)
    })
    .catch(() => {
        console.log('No se pudo cargar el pokemon')
    })