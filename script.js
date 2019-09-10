
inicio();

function inicio(){ 
    document.getElementById("btn_contrast").addEventListener("mouseover",function() {
    cambia("contrast(4)")});
    document.getElementById("btn_brightness").addEventListener("mouseover",function() {
    cambia("brightness(2)")});
    document.getElementById("btn_blur").addEventListener("mouseover",function() {
    cambia("blur(2px)")});
    document.getElementById("btn_invert").addEventListener("mouseover",function() {
    cambia("invert(.8)")});
    document.getElementById("btn_sepia").addEventListener("mouseover",function() {
    cambia("sepia(1)")});
    document.getElementById("btn_opacity").addEventListener("mouseover",function() {
    cambia("opacity(.5)")});
    
    document.getElementById("btn_contrast").addEventListener("mouseout",function() {
    cambia(null)});
    document.getElementById("btn_brightness").addEventListener("mouseout",function() {
    cambia(null)});
    document.getElementById("btn_blur").addEventListener("mouseout",function() {
    cambia(null)});
    document.getElementById("btn_invert").addEventListener("mouseout",function() {
    cambia(null)});
    document.getElementById("btn_sepia").addEventListener("mouseout",function() {
    cambia(null)});
    document.getElementById("btn_opacity").addEventListener("mouseout",function() {
    cambia(null)});
}

function cambia(tipo){
    var imagen = document.querySelector("#imagen");
    imagen.style.filter = null;
    imagen.style.filter = tipo;
}
    

