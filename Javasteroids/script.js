var canvas = document.getElementById('asteroids');
var context = canvas.getContext('2d')

draw_grid(context);

let t = context.canvas.width / 20;
let r = Math.PI / 500;
context.translate(0,t);
for(let i = 0; i <= 50; i++){
    context.rotate(i*r);
    draw_ship(context,t,{guide:true,lineWidth:1});
    context.translate(t,0);

}