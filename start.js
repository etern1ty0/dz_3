//1
const a = -1

function GGG(a){
    if(a>0){
        alert('!')
    }else {
        alert('!!')
    }
}
GGG()

//2
var mass =[]
for(let i = 0;i<10;i++){
    console.log('x')
    mass.push('x')
}
console.log(mass)
// 3
function count(){
    var i = 1
    return  function (){
        return console.log('hi')
    }
}

var funct = count()

console.log(funct())
console.log(funct())