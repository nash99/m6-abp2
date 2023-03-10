const express = require('express');
const app = express();

let ano;
let mes;
let dia;
let total;
let signos= [
    ['aries','tauro'],
    ['descripcion 1','descripcion 2']
];

console.log(signos[0][0]);
console.log(signos[1][0]);

app.listen(3000,()=>{
    console.log('Servicio levantado puerto 3000')
})

app.get('/',(req,res)=>{
    console.log('Hola mundo server')
    res.send('<h1>hola mundo server</h1>');
    
})
app.get('/zodiaco/:ano/:mes/:dia',(req,res)=>{
    ano = parseInt(req.params.ano);
    mes = parseInt(req.params.mes);
    dia = parseInt(req.params.dia);
    total=ano+mes+dia;

    console.log(ano+'\n'+mes+dia);
    if((dia>=21&&mes==3)||(dia<=20&&mes==4))
        res.send('<h2>Eres Aries</h2>');
    if((dia>=24&&mes==9)||(dia<=23&&mes==10))
        res.send('<h2>Eres Libra</h2>');
    if((dia>=21&&mes==4)||(dia<=21&&mes==5))
        res.send('<h2>Eres Tauro</h2>');
    if((dia>=24&&mes==10)||(dia<=22&&mes==11))
        res.send('<h2>Eres Escorpio</h2>');
    if((dia>=22&&mes==5)||(dia<=21&&mes==6))
        res.send('<h2>Eres Geminis</h2>');
    if((dia>=23&&mes==11)||(dia<=21&&mes==12))
        res.send('<h2>Eres Sagitario</h2>');
    if((dia>=21&&mes==6)||(dia<=23&&mes==7))
        res.send('<h2>Eres Cancer</h2>');
    if((dia>=22&&mes==12)||(dia<=20&&mes==1))
        res.send('<h2>Eres Capricornio</h2>');
    if((dia>=24&&mes==7)||(dia<=23&&mes==8))
        res.send('<h2>Eres Leo</h2>');
    if((dia>=21&&mes==1)||(dia<=19&&mes==2))
        res.send('<h2>Eres Acuario</h2>');
    if((dia>=24&&mes==8)||(dia<=23&&mes==9))
        res.send('<h2>Eres Virgo</h2>');
    if((dia>=20&&mes==2)||(dia<=20&&mes==3))
        res.send('<h2>Eres Piscis</h2>');
   
    res.send('<h1>hola mundo server</h1>');
})

app.all('*',(req,res)=>{
    console.log('pagina no encontrada')
    res.send('<h1>No se encontro la pagina</h1>'+'<img src="gato.png" alt="Girl in a jacket" width="500" height="600">');
})