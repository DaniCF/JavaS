var context = document.getElementById('asteroids').getContext('2d');

//Forma
var segments = 24;
var shape = [];

for (var i = 0; i < segments; i++) {
    shape.push(Math.random() - 0.5);
}

//Estado
var radius = 50;
var noise = 0.2;

var x = context.canvas.width * Math.random();
var y = context.canvas.heigth * Math.random();
var angle = 0;

//Movimiento

var x_speed = context.canvas.width * (Math.random() - 0.5);
var y_speed = context.canvas.heigth * (Math.random() - 0.5);
var rotation_speed = 2 * Math.PI * (Math.random() - 0.5);

function draw(ctx,guide){
    if(guide){
        draw_grid(ctx);
    }

    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle);
    draw_asteroids(ctx, radius, shape, {guide:guide, noise:noise})
    ctx.restore();
}

function update(elapsed){
    if(x - radius + elapsed * x_speed > context.canvas.width){
        x = -radius;
    }
    if(x - radius + elapsed * x_speed < 0){
        x = context.canvas.width + radius;
    }
    if(y - radius + elapsed * y_speed > context.canvas.heigth){
        y = -radius;
    }
    if(y - radius + elapsed * x_speed < 0){
        y = context.canvas.heigth + radius;
    }
    
    x += elapsed * x_speed;
    y += elapsed * y_speed;
    angle = (angle + elapsed * rotation_speed) % (2 * Math.PI);
}

var previous, elapsed;

function frame(timestamp){
    context.clearRect(0,0,context.canvas.width,context.canvas.width);
    if (!previous) previous = timestamp;
    elapsed = timestamp - previous;
    update(elapsed / 1000);
    draw(context,true);
    previous = timestamp;
    window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);
