import {COUNTRIES} from "./countries";
import React from 'react';

let COUNTRY_NUM: number;
do {
  COUNTRY_NUM = Math.floor(Math.random()*COUNTRIES.length);
}
while(["GZ", "TV", "XK", "PS", "AN"].includes(COUNTRIES[COUNTRY_NUM].code))
// while("AX"!=COUNTRIES[COUNTRY_NUM].code) // testing :)

function rmctx(e: React.MouseEvent) {
  e.preventDefault();
  return false;
}
function COUNTRY_IMG() {
  let src: string;
  let cl: string = "CImg";
  if(COUNTRIES[COUNTRY_NUM].code == "AX") {
    src = `https://komali.dev/countries/ax.svg`;
    cl += " inverted"
  }
  else if(["PF", "JE","FM","MH", "MP", "AQ", "KI"].includes(COUNTRIES[COUNTRY_NUM].code)){
    src = `https://komali.dev/countries/${COUNTRIES[COUNTRY_NUM].code.toLowerCase()}.png`;
  } else { 
    src = `https://worldle.teuteuf.fr/images/countries/${COUNTRIES[COUNTRY_NUM].code.toLowerCase()}/vector.svg`
    cl += " inverted"
  }
  return <img alt="Location to guess!" className={cl} src={src} onContextMenu={rmctx} />
}
function List() {
  return (
    <datalist id="_list">
      {COUNTRIES.map(x=> (
      <option value={x.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")} />
      ))}
    </datalist>
    )
}
export {COUNTRY_NUM, COUNTRY_IMG, List}
