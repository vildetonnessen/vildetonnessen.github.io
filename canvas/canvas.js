function setup() {
    let canvas = document.getElementById('tegning');
    let ctx = canvas.getContext('2d');
    let xpos = 0;
    let vx = 2;

    function figur(ctx,xpos){
        ctx.beginPath();
        ctx.arc(xpos+75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(xpos+110, 75);
        ctx.arc(xpos+75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(xpos+65, 65);
        ctx.arc(xpos+60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(xpos+95, 65);
        ctx.arc(xpos+90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
    
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(xpos+60, 250, 1, 75);
    
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(xpos+85, 250, 1, 75);
    
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(xpos+100, 175, 40, 1);
    
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(xpos+10, 175, 40, 1);
    
        ctx.fillStyle = 'rgb(255, 20, 147)';
        ctx.beginPath();
        ctx.moveTo(xpos+0, 250);
        ctx.lineTo(xpos+75, 125);
        ctx.lineTo(xpos+150, 250);
        ctx.fill();

    }
    function tegn() {
        ctx.clearRect(0, 0, 500, 500);
        figur(ctx, xpos);
        xpos += vx;
        if (xpos > 350) {
            vx = -2;
        }
        if (xpos < 0) {
            vx = 2;
        }
    }
    setInterval(tegn, 40);

}



