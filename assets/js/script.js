function draw(){
    $('#ovni').css('background-color', '#4079FE');
    var c = document.getElementById('ovni');
    var ctx = c.getContext('2d');
//partie supérieure de la soucoupe
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(160, 175);
    ctx.quadraticCurveTo(200,80,240,175);
    ctx.closePath();
    ctx.fill();
//partie inférieure
ctx.fillStyle = '#E0E1F3';
    ctx.beginPath();
    ctx.moveTo(100, 200);
    ctx.quadraticCurveTo(200,120,300,200);
    ctx.moveTo(100, 200);
    ctx.quadraticCurveTo(200,270,300,200);
    ctx.closePath();
    ctx.fill();
  
  };
  
  