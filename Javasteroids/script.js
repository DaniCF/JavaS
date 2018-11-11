var context = document.getElementById('asteroids').getContext('2d');

var asteroid = new Asteroid(10000, 30, 30);

function draw(){
   
    context.clearRect(0,0, context.canvas.width, context.canvas.height);
    draw_grid(context);
    asteroid.draw(context);
}

function update(elapsed){
    
    asteroid.update(elapsed, context);
    
}

var previous, elapsed;

function frame(timestamp){
    context.clearRect(0,0,context.canvas.width,context.canvas.height);
    if (!previous) previous = timestamp;
    elapsed = timestamp - previous;
    update(elapsed / 1000);
    draw(context,true);
    previous = timestamp;
    window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);
