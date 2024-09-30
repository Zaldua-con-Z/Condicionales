let xCirculo = 500;
let yCirculo = 500;
let diametro = 250;
let esTriangulo = false;
let colorFigura; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorFigura = color(random(255), random(255), random(255)); 
}

function draw() {
    background(0);
    fill(colorFigura);
    if (esTriangulo) {
        triangle(
            xCirculo, yCirculo - diametro / 2,
            xCirculo - diametro / 2, yCirculo + diametro / 2,
            xCirculo + diametro / 2, yCirculo + diametro / 2
        );
    } else {
        circle(xCirculo, yCirculo, diametro);
    }
}

function mousePressed() {
    let distancia = dist(mouseX, mouseY, xCirculo, yCirculo);
    if (distancia < diametro / 2) {
        esTriangulo = !esTriangulo;

        xCirculo = random(diametro / 2, width - diametro / 2);
        yCirculo = random(diametro / 2, height - diametro / 2);
        
        colorFigura = color(random(255), random(255), random(255));
    }
}





