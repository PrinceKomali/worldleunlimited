import {COUNTRIES} from "./countries";
import {COUNTRY_NUM} from "./countrygen";
import {aGuessed, dGuessed, cGuessed} from "./func";

function square(dists: number[]) {
    let arr = new Array<string[]>(dists.length);
    for(var i in dists) {
        dists[i] = Math.floor((Math.max(2_000_000-dists[i]*100,0)/2_000_000)*100);
        arr[i] = new Array<string>(5);
        let green = Math.floor(dists[i] / 20);
        let yellow = +(dists[i] - green * 20 >= 10);

        arr[i].fill("🟩", 0, green);
        arr[i].fill("🟨", green, green + yellow);
        arr[i].fill("⬛", green+yellow);

    }
    return arr.map(x=>x.join(""));
}
function generateShare(solved: boolean)  {
    return `🌎 Worldle Unlimited ${solved?cGuessed.length:"X"}/6 🌍\nLocation: ${
        COUNTRIES[COUNTRY_NUM].name.toUpperCase()
    }\n${
        square(dGuessed).map((x,i)=>`${x}${aGuessed[i]} [${cGuessed[i][1]} ${
            cGuessed[i][0].split("").map(x=>String.fromCodePoint(0x1f1a5+x.charCodeAt(0))).join("")
        }]`).join("\n")
    }\nworldleunlimited.komali.dev`
}
function popup(solved: boolean) {
    // PLEASE Somebody help me figure out how to do this in React
    let button = document.querySelector("button");
    button?.classList.remove("btn_outline");
    button?.classList.add("btn_win");
    button!.innerText = "Share";
    button!.addEventListener("click", ()=>{
        navigator.clipboard.writeText(generateShare(solved)).then(x=>button!.innerText = "Copied!")
    });


}
export {generateShare, popup}