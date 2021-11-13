function preload()
{}
function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}
function draw()
{
    image(canvas,280,280,200,100);
}

function clear_canvas()
{
    background("white");
}