function randomDuckURL(){
    let num = Math.floor(Math.random()*100)+1
    console.log(`https://random-d.uk/api/${num}.jpg`)
    return `https://random-d.uk/api/v2/${num}.jpg`

}

function showImgName(){
    document.getElementById("nameBox").innerHTML=" "
    let duckarray = document.getElementsByClassName("duckPics")
    for(i=0; i < duckarray.length; i++){
        document.getElementById("nameBox").innerHTML+=`bilde ${i+1} = ${duckarray[i].src}.       ` 
    }
}

function addRandomDuck(container,column){
    container.innerHTML = `<img id="duck${column}" class="duckPics" src ="${randomDuckURL()}"/>`
    new Audio("Quack.mp3").play();
}