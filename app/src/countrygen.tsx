import {COUNTRIES} from "./countries";
import React from 'react';

let COUNTRY_NUM: number;
do {
  COUNTRY_NUM = Math.floor(Math.random()*COUNTRIES.length);
}
while(["GZ", "TV", "XK", "PS", "AN"].includes(COUNTRIES[COUNTRY_NUM].code))
function rmctx(e: React.MouseEvent) {
  e.preventDefault();
  return false;
}
function COUNTRY_IMG() {
  let src: string;
  let cl: string = "CImg";
  if(["PF", "JE","FM","MH", "MP", "AQ", "KI"].includes(COUNTRIES[COUNTRY_NUM].code)){
    src = `https://komali.dev/countries/${COUNTRIES[COUNTRY_NUM].code.toLowerCase()}.png`;
  } else { 
    src = `https://worldle.teuteuf.fr/images/countries/${COUNTRIES[COUNTRY_NUM].code.toLowerCase()}/vector.svg`
    cl += " inverted"
  }
  return <img alt="Country Image" className={cl} src={src} onContextMenu={rmctx} />
}
function List() {
  return (
    <datalist id="_list">
      {COUNTRIES.map(x=> (
      <option value={x.name} />
      ))}
    </datalist>
    )
}
export {COUNTRY_NUM, COUNTRY_IMG, List}
