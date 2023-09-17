// screen(pantalla)
let screen = document.getElementById("screen");

//escribir en la pantalla
function press(numValue){
    if(screen.value == 0){
        screen.value = '';
    }
    screen.value += numValue;
}

// C (limpiar la pantalla)
function clearScreen(val){
    screen.value = val;
}

// Tecla Borrar 
function backspace(){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length - 1);
}

// resultado (=)
function calculate(){
    if(screen.value != ''){
        try{
            clearScreen(eval(screen.value))
        }catch(err){
            clearScreen("Bad expression")
        }
    }
}

// Funcion seno, coseno y tangente
function seno(){
    screen.value = Math.sin(screen.value * Math.PI / 180);
}

function coseno(){
    screen.value = Math.cos(screen.value * Math.PI / 180);
}

function tangente(){
    screen.value = Math.tan(screen.value * Math.PI / 180); 
}

// Funcion aseno, acoseno y atang
function secante(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI);
}

function cosecante(){
    screen.value = Math.acos(screen.value) * (180 / Math.PI);
}

function cotang(){
    screen.value = Math.atan(screen.value) * (180 / Math.PI); 
}

// funcion logaritmo natural y logaritmo log10
function ln(){
    screen.value = Math.log(screen.value);
}

function log(){
    screen.value = Math.log10(screen.value);
}

// funcion porcentaje (%)
function percent(){
    screen.value = (screen.value / 100);
}

// funcion cuadrado, cubo y raiz
function square(){
    screen.value = Math.pow(screen.value, 2);
}

function cube(){
    screen.value = Math.pow(screen.value, 3);
}

function raiz(){
    screen.value = Math.sqrt(screen.value);
}

// funcion +/-
function masmenos(){
    var x = screen;
    var y = x.value;
    y = y * -1;
    x.value = y;
}

// funcion exponencial
function exp(){
    screen.value = Math.pow(10, screen.value);
}

// funcion numero PI
function pi(){
    screen.value += Math.PI;
}