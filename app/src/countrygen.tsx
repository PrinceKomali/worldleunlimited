import {COUNTRIES} from "./countries";
import React from 'react';

let COUNTRY_NUM: number;
do {
  COUNTRY_NUM = Math.floor(Math.random()*COUNTRIES.length);
}
while(["GZ", "JE", "TV", "XK", "PS", "AN", "FM"].includes(COUNTRIES[COUNTRY_NUM].code))
function rmctx(e: React.MouseEvent) {
  e.preventDefault();
  return false;
}
function COUNTRY_IMG() {
  let src: string = `https://worldle.teuteuf.fr/images/countries/${COUNTRIES[COUNTRY_NUM].code.toLowerCase()}/vector.svg`
  return <img alt="Country Image" className="CImg" src={src} onContextMenu={rmctx} />
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