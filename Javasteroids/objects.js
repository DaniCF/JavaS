function extend(ChildClass, ParentClass){
    var parent = new ParentClass();
    ChildClass.prototype = parent;
    ChildClass.prototype.super = parent.constructor;
    ChildClass.prototype.constructor = ChildClass;
}

function Asteroid(mass, x, y, x_speed, y_speed, rotation_speed){  
    var density = 1; 
    var radius = Math.sqrt((mass / density) / Math.PI);   
    this.super(mass, radius, x, y, 0, x_speed, y_speed,  rotation_speed);  
    this.circumference = 2 * Math.PI * this.radius;  
    this.segments = Math.ceil(this.circumference / 15);  
    this.segments = Math.min(25, Math.max(5, this.segments));  
    this.noise = 0.2;  
    this.shape = [];  
    for(var i = 0; i < this.segments; i++) {    
        this.shape.push(2 * (Math.random() - 0.5));  
    }
}

extend(Asteroid,Mass);

Asteroid.prototype.draw = function(ctx,guide){
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(this.angle);
    draw_asteroids(ctx, this.radius, this.shape, {guide:guide, noise:this.noise})
    ctx.restore();
}

function Ship(mass, radius, x,y, power, weapon_power){
    this.super(mass, radius, x,y, 1.5 * Math.PI);
    this.thruster_power = power;
    this.steering_power = power / 20;
    this.right_thruster = false;
    this.left_thruster = false;
    this.thruster_on = false;
    this.weapon_power = weapon_power || 200;
}
extend(Ship,Mass);

Ship.prototype.draw = function(c,guide){
    c.save();
    c.translate(this.x,this.y);
    c.rotate(this.angle);
    draw_ship(c,this.radius, {guide:guide, thruster: this.thruster_on});
    c.restore();
}

Ship.prototype.update = function(elapsed) {
    this.push(this.angle,this.thruster_on * this.thruster_power, elapsed);
    this.twist((this.right_thruster - this.left_thruster) * this.steering_power, elapsed);
    Mass.prototype.update.apply(this, arguments);
}

Ship.prototype.projectile = function(elapsed){
    var p = new Projectile(0.025, 1, 
        this.x + Math.cos(this.angle) * this.radius,
        this.y + Math.sin(this.angle) * this.radius,
        this.x_speed,
        this.y_speed,
        this.rotation_speed
    );
    p.push(this.angle, this.weapon_power, elapsed);
    this.push(this.angle + Math.PI, this.weapon_power, elapsed);
    return p;
}

function Projectile(mass, lifetime, x, y, x_speed, y_speed, rotation_speed){
    var density = 0.001;
    var radius = Math.sqrt((mass / density) / Math.PI);
    this.super(mass, radius, x, y, 0, x_speed, y_speed, rotation_speed);
    this.lifetime = lifetime;
    this.life = 1.0;
}
extend(Projectile, Mass);

Projectile.prototype.update = function(elapsed, c){
    this.life -= (elapsed / this.lifetime);
    Mass.prototype.update.apply(this, arguments);
}

Projectile.prototype.draw = function(c, guide) {
    c.save();
    c.translate(this.x,this.y);
    c.rotate(this.angle);
    draw_projectile(c, this.radius, this.life, guide);
    c.restore();
}

function Mass(x, y, mass, radius, angle, x_speed, y_speed, rotation_speed){
    this.x = x;
    this.y = y;
    this.mass = mass || 1;
    this.radius = radius || 50;
    this.angle = angle || 0;
    this.x_speed = x_speed || 0;
    this.y_speed = y_speed || 0;
    this.rotation_speed = rotation_speed || 0;
}

Mass.prototype.update = function(elapsed, ctx){
    this.x += this.x_speed * elapsed;
    this.y += this.y_speed * elapsed;
    this.angle += this.rotation_speed * elapsed;
    this.angle %= (2 * Math.PI);
    if (this.x - this.radius > ctx.canvas.width) {
        this.x = -this.radius;
    }
    if (this.x + this.radius < 0) {
        this.x = ctx.canvas.width + this.radius;
    }
    if (this.y - this.radius > ctx.canvas.height) {
        this.y = -this.radius;
    }
    if (this.y + this.radius < 0) {
        this.y = ctx.canvas.height + this.radius;
    }  
}

Mass.prototype.push = function(angle, force, elapsed){
    this.x_speed += elapsed * (Math.cos(angle) * force) / this.mass;
    this.y_speed += elapsed * (Math.sin(angle) * force) / this.mass;
}

Mass.prototype.twist = function(force, elapsed){
    this.rotation_speed += elapsed * force / this.mass;
}

Mass.prototype.turn_left =  function(){
    this.angle += -0.2;    
}

Mass.prototype.turn_right =  function(){
    this.angle += 0.2;   
}

Mass.prototype.speed = function(){
    return Math.sqrt(Math.pow(this.x_speed, 2) + Math.pow(this.y_speed, 2));
}

Mass.prototype.movement_angle = function(){
    return Math.atan2(this.y_speed, this.x_speed);
}

Mass.prototype.draw = function(c){
    c.save();
    c.translate(this.x, this.y);
    c.rotate(this.angle);
    c.beginPath();
    c.arc(0,0, this.radius, 0, 2 * Math.PI);
    c.lineTo(0,0);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    c.restore();
}

function key_handler(e, value){
    var nothing_handled = false;
    switch(e.key || e.keyCode){
        case "ArrowUp":
        case 38:
            ship.thruster_on = value;
            break;
        case "ArrowLeft":
        case 37:
            ship.turn_left();
            break;
        case "ArrowRight":
        case 39:
            ship.turn_right();
            break;
        case "":
        case 32:
            ship.trigger = value;
            break;
        case "g":
        case 71:
            if(value) guide = !guide;
        default:
            nothing_handled = true;
    }
    if(!nothing_handled) e.preventDefault();
}