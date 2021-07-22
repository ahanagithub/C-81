canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

colour="blue";

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.arc(290,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=2;
ctx.arc(380,200,40,0,2*Math.PI);
ctx.stroke();
 
ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=2;
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=2;
ctx.arc(340,250,40,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",ahana_mousedown);

function ahana_mousedown(e)
{
    console.log("ahana");
    colour=document.getElementById("colour").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    circle (mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}