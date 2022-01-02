containerEl = document.querySelector('#root');
containerEl.addEventListener("click", onClick);
let isDrawing;
let canvas;
let context;
let className;

const colors = [{
        id: 'redPen',
        color: 'rgb(250, 0, 0)'
    },
    {
        id: 'greenPen',
        color: 'rgb(0, 128, 0)'
    },
    {
        id: 'bluePen',
        color: 'rgb(0, 0, 255)'
    },
    {
        id: 'pinkPen',
        color: 'rgb(255, 192, 203)'
    },
    {
        id: 'yellowPen',
        color: 'rgb(255, 255, 0)'
    },
    {
        id: 'eraserPen',
        color: 'rgb(255,255,255)'
    },
]

const fatness = [{
        id: 'thickness-1',
        thickness: '1'
    },
    {
        id: 'thickness-5',
        thickness: '5'
    },
    {
        id: 'thickness-10',
        thickness: '10'
    },
]

window.onload = function() {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
};

function onClick(e) {
    if (e.target.className === 'color') {
        const choiseColor = colors.filter((color) => {
            return e.target.id === color.id
        })[0].color
        changeColor(choiseColor)
    } else if (e.target.className === 'thickness') {
        const choiseThickness = fatness.filter((thickness) => {
            return e.target.id === thickness.id
        })[0].thickness
        changeThickness(choiseThickness)
    } else if (e.target.className === 'clearCanvas') {
        clearCanvas()
    }
};

function changeColor(color) {
    context.strokeStyle = color;
};

function changeThickness(thickness) {
    context.lineWidth = thickness;
};

function startDrawing(e) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
};

function draw(e) {
    if (isDrawing == true) {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        context.lineTo(x, y);
        context.stroke();
    };
};

function stopDrawing() {
    isDrawing = false;
};

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
};