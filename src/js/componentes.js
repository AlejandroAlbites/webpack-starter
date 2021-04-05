
import '../css/componentes-1.css';

export const saludar = (nombre)=>{
    console.log('creando una etiqueta h1 en html');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola alejandro, ${nombre},`;

    document.body.append(h1);
    const hola = document.getElementById("testeo")
    console.log(hola);
}