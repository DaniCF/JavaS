var context = document.getElementById('pacman').getContext('2d');

pacman = new PacMan(600,300,20,120);
ghosts = [
    new Ghost(Math.random() * 1280, Math.random() * 720, 20, 70,'red'),
    new Ghost(Math.random() * 1280, Math.random() * 720, 20, 60,'pink'),
    new Ghost(Math.random() * 1280, Math.random() * 720, 20, 50,'cyan'),
    new Ghost(Math.random() * 1280, Math.random() * 720, 20, 40,'orange')
]

function draw(ctx,guide){
    pacman.draw(ctx);
    ghosts.forEach(function(ghost){
        ghost.draw(context,guide);
    });
}

function update(elapsed){
    pacman.update(elapsed,1280,720);
    ghosts.forEach(function(ghost){
        ghost.update(pacman,elapsed);
    });   
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
