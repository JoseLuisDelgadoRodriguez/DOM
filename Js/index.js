function miclick(evento) {
  event.target.style.color = "white";
  console.log(event.target.id);
  document.getElementById(evento.target.id).style.backgroundColor = "red";

  if(event.ctrlKey == true) {
    document.getElementById(evento.target.id).style.backgroundColor = "yellow";
  }
  if(event.altKey == true) {
    document.getElementById(evento.target.id).style.backgroundColor = "blue";
  }
}
function nogoogle(evento) {
  // event.preventDefault();
  alert("vas a ir a Google en otra pestaña");
}

document.querySelector("#caja1").onclick = miclick;
document.querySelector("#caja3").onclick = miclick;
document.querySelector("#caja4").onclick = miclick;
document.querySelector("#caja2").onclick = miclick;

document.querySelector("#google").addEventListener("click", nogoogle);

