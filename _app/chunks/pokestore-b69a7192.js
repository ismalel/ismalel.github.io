import{C as p}from"./vendor-b22f1795.js";const m=p([]),s={};let n=!1;const l=async()=>{if(n)return;const e=(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")).json()).results.map((c,a)=>({name:c.name,id:a+1,image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${a+1}.png`}));m.set(e),n=!0},u=async t=>{if(s[t])return s[t];try{const o=`https://pokeapi.co/api/v2/pokemon/${t}`,e=await(await fetch(o)).json();return s[t]=e,e}catch(o){return console.error(o),null}};export{l as f,u as g,m as p};
