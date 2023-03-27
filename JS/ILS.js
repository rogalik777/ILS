let toggleOx = document.querySelector('#one');
let toggleOy = document.querySelector('#two');
let toggleOz = document.querySelector('#three');

let aircraftOne = document.querySelector('.aircraftOne');
let aircraftTwo = document.querySelector('.aircraftTwo');
let rombGs = document.querySelector('.rombGs');
let rombLoc = document.querySelector('.rombLoc');
let hLine = document.querySelector('.hline');
let vLine = document.querySelector('.vline');

let left = document.querySelector(".diagramaOne").clientWidth;
let topOne = document.querySelector(".diagramaOne").clientHeight;
let topTwo = document.querySelector(".diagramaTwo").clientHeight;
let toprombGs = document.querySelector(".glide-slope").clientHeight;
let leftrombLoc = document.querySelector(".localizer").clientWidth;
let graphsWidth = document.querySelector(".graphs").clientWidth + 100;
let graphsHeight = 0.25 * document.querySelector(".graphs").clientHeight;

let graphLoc90 = document.querySelector(`.graphLoc90`);
let ctxGraphLoc90 = graphLoc90.getContext(`2d`);
let graphLoc150 = document.querySelector(`.graphLoc150`);
let ctxGraphLoc150 = graphLoc150.getContext(`2d`);
let graphGl90 = document.querySelector(`.graphGl90`);
let ctxgraphGl90 = graphGl90.getContext(`2d`);
let graphGl150 = document.querySelector(`.graphGl150`);
let ctxgraphGl150 = graphGl150.getContext(`2d`);

function movePlane() {
    toggleOx.addEventListener("pointerdown", () => {
        toggleOx.onpointermove = function() {
        let distanceOne = +toggleOx.value + (+left * 0.2) - 100;
        let distanceTwo = +toggleOx.value + (+left * 0.22) - 100;
        let distanceRombGs = 0.158 * (+toggleOx.value - 100) + (+toprombGs * 0.5) + (+toggleOz.value - 50);

        rombGs.style.top = `${distanceRombGs}px`;
        aircraftOne.style.left = `${distanceOne}px`;
        aircraftTwo.style.left = `${distanceTwo}px`;
        hLine.style.top = `${distanceRombGs}px`;

        let k90 = graphsHeight/((50/(+toggleOz.value + 0.158 * (+toggleOx.value - 100))));
        let k150 = graphsHeight/((50/(100 - +toggleOz.value - 0.158 * (+toggleOx.value - 100))));
        drawSyn90(ctxgraphGl90, graphsWidth, k90);
        drawSyn150(ctxgraphGl150, graphsWidth, k150);
        }

        toggleOx.onpointerup = function() {
            let distanceOne = +toggleOx.value + (+left * 0.2) - 100;
            let distanceTwo = +toggleOx.value + (+left * 0.22) - 100;
            let distanceRombGs = 0.158 * (+toggleOx.value - 100) + (+toprombGs * 0.5) + (+toggleOz.value - 50);
    
            rombGs.style.top = `${distanceRombGs}px`;
            aircraftOne.style.left = `${distanceOne}px`;
            aircraftTwo.style.left = `${distanceTwo}px`;
            hLine.style.top = `${distanceRombGs}px`;

            let k90 = graphsHeight/((50/(+toggleOz.value + 0.158 * (+toggleOx.value - 100))));
            let k150 = graphsHeight/((50/(100 - +toggleOz.value - 0.158 * (+toggleOx.value - 100))));
            drawSyn90(ctxgraphGl90, graphsWidth, k90);
            drawSyn150(ctxgraphGl150, graphsWidth, k150);
            }
    })

    toggleOy.addEventListener("pointerdown", () => {
        toggleOy.onpointermove = function() {
        let distance = -toggleOy.value + (+topOne * 0.44) + 100;
        let distanceRombLoc = +toggleOy.value + (+leftrombLoc * 0.5) - 100;
        
        aircraftOne.style.top = `${distance}px`;
        rombLoc.style.left = `${distanceRombLoc}px`;
        vLine.style.left = `${distanceRombLoc}px`;
        
        let k90 = graphsHeight/((100/+toggleOy.value));
        let k150 = graphsHeight/((100/(200 - +toggleOy.value)));
        drawSyn90(ctxGraphLoc90, graphsWidth, k90);
        drawSyn150(ctxGraphLoc150, graphsWidth, k150);
        }


        toggleOy.onpointerup = function() {
            let distance = -toggleOy.value + (+topOne * 0.44) + 100;
            let distanceRombLoc = +toggleOy.value + (+leftrombLoc * 0.5) - 100;
            
            aircraftOne.style.top = `${distance}px`;
            rombLoc.style.left = `${distanceRombLoc}px`;
            vLine.style.left = `${distanceRombLoc}px`;

            let k90 = graphsHeight/((100/+toggleOy.value));
            let k150 = graphsHeight/((100/(200 - +toggleOy.value)));
            drawSyn90(ctxGraphLoc90, graphsWidth, k90);
            drawSyn150(ctxGraphLoc150, graphsWidth, k150);
            }
    })

    toggleOz.addEventListener("pointerdown", () => {
        toggleOz.onpointermove = function() {
        let distance = -toggleOz.value + (+topTwo * 0.38) + 50;
        let distanceRombGs = +toggleOz.value + (+toprombGs * 0.5) - 50 + 0.158 * (+toggleOx.value - 100);
        
        aircraftTwo.style.top = `${distance}px`;
        rombGs.style.top = `${distanceRombGs}px`;
        hLine.style.top = `${distanceRombGs}px`;
        
        let k90 = graphsHeight/((50/(+toggleOz.value + 0.158 * (+toggleOx.value - 100))));
        let k150 = graphsHeight/((50/(100 - +toggleOz.value - 0.158 * (+toggleOx.value - 100))));
        drawSyn90(ctxgraphGl90, graphsWidth, k90);
        drawSyn150(ctxgraphGl150, graphsWidth, k150);
        }

        toggleOz.onpointerup = function() {
            let distance = -toggleOz.value + (+topTwo * 0.38) + 50;
            let distanceRombGs = +toggleOz.value + (+toprombGs * 0.5) - 50 + 0.158 * (+toggleOx.value - 100);
            
            aircraftTwo.style.top = `${distance}px`;
            rombGs.style.top = `${distanceRombGs}px`;
            hLine.style.top = `${distanceRombGs}px`;

            let k90 = graphsHeight/((50/(+toggleOz.value + 0.158 * (+toggleOx.value - 100))));
            let k150 = graphsHeight/((50/(100 - +toggleOz.value - 0.158 * (+toggleOx.value - 100))));
            drawSyn90(ctxgraphGl90, graphsWidth, k90);
            drawSyn150(ctxgraphGl150, graphsWidth, k150);
            }
    })
}


function drawSyn90(ctx, w, h) {
    ctx.clearRect(0, 0, w, graphsHeight);
    ctx.lineWidth = 2;
    let Y = function(x) {
        return - (h/4) * Math.sin(4 * Math.PI  * 1.8 * x/ w) + (graphsHeight/2);
    };
    for (let x = 0; x < w; x+=0.3) {
        let y = Y(x);
        ctx.fillRect(x, y, 2, 2);
    }
}

function drawSyn150(ctx, w, h) {
    ctx.clearRect(0, 0, w, graphsHeight);
    ctx.lineWidth = 2;
    let Y = function(x) {
        return - (h/4) * Math.sin(4 * Math.PI  * 3 * x/ w) + (graphsHeight/2);
    };
    for (let x = 0; x < w; x+=0.3) {
        let y = Y(x);
        ctx.fillRect(x, y, 2, 2);
    }
}

movePlane();
drawSyn90(ctxGraphLoc90, graphsWidth, graphsHeight);
drawSyn150(ctxGraphLoc150, graphsWidth, graphsHeight);
drawSyn90(ctxgraphGl90, graphsWidth, graphsHeight);
drawSyn150(ctxgraphGl150, graphsWidth, graphsHeight);





