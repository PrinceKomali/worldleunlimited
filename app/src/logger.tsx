function Log() {
  return (
    <div className="log" style={{backgroundColor:"#eee"}}> </div>
  )
}
function Logger(t: string, c: string = "#eee") {
  let el = document.querySelector(".log")! as HTMLElement;
  el.textContent = t;
  el.style.backgroundColor = c;
}
export {Log, Logger}