let herodiv=document.getElementById('superhero');
let textdiv=document.getElementById('hero');
let fuckdiv=document.getElementById('fuck');
const random=()=>{
  return Math.floor(Math.random()*732+1);
}
  
const func=()=> {
 let id=random();
fetch(`https://superheroapi.com/api.php/933469797833865/${id}`).then(response=>response.json()).then(json=>{
      console.log(json);
  const Durability=json.powerstats.durability;
  const power=json.powerstats.power;
  const intelligence=json.powerstats.intelligence;
  const speed=json.powerstats.speed;
  const strength=json.powerstats.strength;
      herodiv.innerHTML=`<h2>${json.name}</h2><img src='${json.image.url}'height="300"width="300" ><p>Durability : ${Durability}</p><p>power : ${power}</p><p>intelligence : ${intelligence}</p><p>speed : ${speed}</p><p>strength : ${strength}</p>`
    })
  }
   let entered=textdiv.value;
 // console.log(entered);
  let print=( ) => {
    let entered=textdiv.value;
fetch(`https://superheroapi.com/api.php/933469797833865/search/${entered}`).then(response=>response.json()).then(json=>{
      console.log(json);
       const Durability=json.results[0].powerstats.durability;
  const power=json.results[0].powerstats.power;
  const intelligence=json.results[0].powerstats.intelligence;
  const speed=json.results[0].powerstats.speed;
  const strength=json.results[0].powerstats.strength;
      herodiv.innerHTML=`<h2>${json.results[0].name}</h2><img src='${json.results[0].image.url}'height="300"width="300" ><p>Durability : ${Durability}</p><p>power : ${power}</p><p>intelligence : ${intelligence}</p><p>speed : ${speed}</p><p>strength : ${strength}</p>`
    })
  }
fuckdiv.onclick=()=>print();