function closeBox() {
    let box = document.getElementById("box");
    let x = document.getElementById("x");

    let points1 = document.getElementById("points1");
    let points2 = document.getElementById("points2");
    let points3 = document.getElementById("points3");
    let points4 = document.getElementById("points4");
    let points5 = document.getElementById("points5");

    points5.style.opacity = "0";
    setTimeout(() => {points4.style.opacity = "0"; }, 200 );
    setTimeout(() => {points3.style.opacity = "0"; }, 400 );
    setTimeout(() => {points2.style.opacity = "0"; }, 600 );
    setTimeout(() => {points1.style.opacity = "0"; }, 800 );

    setTimeout(() => {  x.style.opacity = "0"; }, 1300 );
    setTimeout(() => { box.style.transform = "translateX(1500px) translateY(-100px)"; }, 1000)
}

function moveBox() {
    let box = document.getElementById("box");
    let x = document.getElementById("x");

    let points1 = document.getElementById("points1");
    let points2 = document.getElementById("points2");
    let points3 = document.getElementById("points3");
    let points4 = document.getElementById("points4");
    let points5 = document.getElementById("points5");

    setTimeout(() => {  x.style.opacity = "1"; }, 1500 ); 
    box.style.transform = "translateX(0) translateY(-100px)";

    setTimeout(() => {points1.style.opacity = "1"; }, 1700 );
    setTimeout(() => {points2.style.opacity = "1"; }, 2000 );
    setTimeout(() => {points3.style.opacity = "1"; }, 2300 );
    setTimeout(() => {points4.style.opacity = "1"; }, 2600 );
    setTimeout(() => {points5.style.opacity = "1"; }, 2900 );

}
