const element = document.querySelector("#canvas");

const ctx =  element.getContext("2d");

const w= document.body.clientWidth
const h= document.body.clientHeight

element.width=w;
element.height=h;

const position=Array(600).join(0).split("");



console.log(position);

const iniMatrix = () =>{
    ctx.fillStyle = "rgba(0, 15, 2, 0.15)";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle="rgba(0, 150, 0, 0.9)"
    ctx.font = "11pt"

    position.map(
        (y, index) =>{
            const text= String.fromCharCode(1e3 + Math.random() * 30);
            const x = (index * 15)+15

            canvas.getContext("2d").fillText(text, x, y);

         y > 100 + Math.random() * 1e5
         ? (position[index] = 0)
         :(position[index] = y + 15);
        }
    )
    
};
setInterval(iniMatrix, 70);