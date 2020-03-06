const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let kleuren = ['brown','red','black','blue'];
let circles = [];
for(let i =0; i < 100; i++){
    let myPoint2 = new Point(getRandomInt(0, width),getRandomInt(0,height),40,kleuren[getRandomInt(0,3)]);
    myPoint2.draw(context);

    circles.push(myPoint2)
}
