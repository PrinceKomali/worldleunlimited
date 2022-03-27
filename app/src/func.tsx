
import {COUNTRIES} from "./countries";
import {Logger} from "./logger";
import {COUNTRY_NUM} from "./countrygen";

let done: boolean = false;

function rad(d: number) {return (d * Math.PI)/180;}
function deg(d: number) {return (d * 180)/Math.PI;}
// START STACKOVERFLOW PART :) 
function distance(lat1: number,lon1: number,lat2: number,lon2: number): number{
  var dLat = rad(lat2-lat1);
  var dLon = rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  return 12742 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));;
}
function title(s: string) { return s.replace( /\w\S*/g, function(t:string) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); } ); }

function angle(lat1: number, lon1:number,lat2: number, lon2: number): string {
//borrowed from geolib, slightly modified
  if(lat1 === lat2 && lon1 === lon2) return "🎉"
    var dLon = rad(lon2 - lon1);
    var dLat = Math.log(
        Math.tan(rad(lat2) / 2 + Math.PI / 4) /
            Math.tan(rad(lat1) / 2 + Math.PI / 4)
    );
    if (Math.abs(dLon) > Math.PI) {
        if (dLon > 0) {
            dLon = (Math.PI * 2 - dLon) * -1;
        } else {
            dLon = Math.PI * 2 + dLon;
        }
    }
      let d = (deg(Math.atan2(dLon, dLat)) + 360) % 360;

  return ['⬆️', '↗️', '➡️', '↘️', '⬇️', '↙️', '⬅️', '↖️', '⬆️'][Math.round(d/45)]
}

//END STACKOVERFLOW PART :)
let pos: number = 0;
function GameOver() {
  Logger("Sorry! We were looking for: " + COUNTRIES[COUNTRY_NUM].name, "#ff5e5e")
}


function send() {
  if(done) return 0;
  let el = document.getElementById("guess")! as HTMLInputElement;
  if(!el.value || el.value.trim() == "") return
  el.value = el.value!.trim().toUpperCase();
  if(!COUNTRIES.map(x=>x.name.toUpperCase()).includes(el.value)) {
    Logger("This is not a country!", "#ebc934");
    el.value = "";
    return 0;
  }
  
  let QCountry = COUNTRIES.find(x=>x.name.toLowerCase() == el.value.toLowerCase())!;
  (document.querySelectorAll(".PHold")![pos] as HTMLInputElement).value = `${title(el.value)} (${
    distance(
      QCountry.latitude,
      QCountry.longitude, 
      COUNTRIES[COUNTRY_NUM].latitude,
      COUNTRIES[COUNTRY_NUM].longitude
    ).toFixed(3)
  }km) ${
    angle(
      QCountry.latitude,
      QCountry.longitude, 
      COUNTRIES[COUNTRY_NUM].latitude,
      COUNTRIES[COUNTRY_NUM].longitude
    )
  }`;
  if(COUNTRIES[COUNTRY_NUM].name.toUpperCase() == el.value) {
    Logger("You guessed correctly! Reload to play again!", "#5eff63");
    el.value = "";
    done = true;
    el.readOnly = true;
    return 0;
  }
  el.value = "";
  Logger(" ");
  if(pos == 5) GameOver();
  pos++;
  
}
function keyPressFilter(e: {key: string}) {
  if(e.key == "Enter") send()
}
function GuessButton() {
  return (
    <button className="btn" onClick={send}>Guess</button>
  )
}
function GuessInput() {
  return (<input type='text' list="_list" className="Text Guess" placeholder="Input Your Guess" id="guess" onKeyDown={keyPressFilter}/>)
}
export {GuessButton, GuessInput}