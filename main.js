function lineThrough(){
    let listitem = document.querySelector('li')
    listitem.style.textDecoration = "line-through";
}

lineThrough()

function setImage(id, url){
    let img = document.querySelector(id);// selects an image element based on the id
    //let img = document.querySelector(# + id);
    img.src = url;
}

setImage("#image-1", "http://clipart-library.com/data_images/6103.png")
setImage("#image-2", "http://clipart-library.com/data_images/6103.png")
setImage("#image-3", "http://clipart-library.com/data_images/6103.png")

function removeItem(){
    let listitem = document.querySelector("li");
    listitem.remove();
}


removeItem()
removeItem()

function changeSize(fontSize, id){
    let text = document.querySelector(id);
    text.style.fontSize = fontSize

}

changeSize("50px", "#heading")

let itemC = document.createElement("img")

itemC.src = "http://clipart-library.com/data_images/6103.png"

function createDom(item){
    let myUl =  document.querySelector("#arguments");
        myUl.appendChild(item);
}
createDom(itemC)



function changesize30(name){
    name.style.height = "30px"
}
let a = document.querySelector("#image-1")
let b = document.querySelector("#image-2")
let c = document.querySelector("#image-3")
changesize30(a)
changesize30(b)
changesize30(c)

function invis(element){
element.className = "invisible"
}
let listitem = document.querySelector("li")

invis(listitem)

function createli(string){
    let item = document.createElement("li")
    item.innerText = string;
    return item
}

let item1 = createli('Testing text');
let arguments = document.querySelector('#arguments')
arguments.appendChild(item1)

function createHeader(header,text){
    let item = document.createElement(`h${header}`)
    item.innerText = text
    return item
}

let header1 = createHeader('2', "header text")
arguments.appendChild(header1)
