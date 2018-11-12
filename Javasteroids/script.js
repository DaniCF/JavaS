var context = document.getElementById('asteroids').getContext('2d');

var asteroids = [];
for (let i=0; i<4; i++) {
    let asteroid = new Asteroid(10000, 30, 30);
    asteroid.push(Math.random() * 2 * Math.PI, 50, 60);
    asteroid.twist((Math.random()-0.5) * 50, 60);
    asteroids.push(asteroid);
}
var ship = new Ship(context.canvas.width/2, context.canvas.height/2);

function draw(){  
    context.clearRect(0,0, context.canvas.width, context.canvas.height);
    draw_grid(context);
    asteroids.forEach(function(asteroid){
        asteroid.draw(context);
    })
    ship.draw(context);
}

function update(elapsed){    
    if(Math.abs(ship.speed()) < 15){
        ship.angle += Math.PI * 2 * 0.01;
    }    
    if(Math.abs(ship.speed()) > 100){
        ship.angle = ship.movement_angle() + Math.PI;
    }
    ship.push(ship.angle, 1000, elapsed);
    asteroids.forEach(function(asteroid){
        asteroid.update(elapsed, context);
    })
    ship.update(elapsed, context);
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
