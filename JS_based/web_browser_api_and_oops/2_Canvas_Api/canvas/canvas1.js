const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')

//draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10,10,150,100);


//draw circle
ctx.fillStyle = 'red'
ctx.arc(300,300,100,0,Math.PI*2)
ctx.fill()

//draw lines
ctx.beginPath()
ctx.strokeStyle = 'orange'
ctx.lineWidth =5;
ctx.moveTo(10,10)
ctx.lineTo(300,300)
ctx.stroke()

ctx.moveTo(300,300)
ctx.lineTo(0,600)
ctx.stroke()


//draw text
ctx.font = '30px Arial'
ctx.fillStyle='blue'
ctx.lineWidth = 2;
ctx.fillText('Hello World',300,100,300)
ctx.strokeText('Hello World',300,450,300)


//draw image
const image = document.querySelector('img')
image.style.display = 'none';
image.addEventListener('load',()=>{
    ctx.drawImage(image,270,250,100,100)
})