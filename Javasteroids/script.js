var context = document.getElementById('asteroids').getContext('2d');

var asteroids = [
    new Asteroid(24,20,0.2),
    new Asteroid(24,20,0.5),
    new Asteroid(5,20,0.2),
];

function draw(ctx,guide){
    if(guide){
        draw_grid(ctx);
    }

    asteroids.forEach(function(asteroid){
        asteroid.draw(context, guide);
    });
}

function update(elapsed){
    asteroids.forEach(function(asteroid){
        asteroid.update(elapsed);
    });
    
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
