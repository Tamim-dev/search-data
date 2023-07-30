let input =document.querySelector("input")
let search =document.querySelector(".search")
let reset =document.querySelector(".reset")
let list =document.querySelector("ul")
let result =document.querySelector(".result")
let tamim =document.querySelector(".tamim")

let counter =0


let arr =["Tamim","sami","mahmud","Tanvir","fish","emal","noshad","salman","ismail","jahed"]

arr.map(item=>{
        list.innerHTML += `<li>${item}</li>`
})


search.addEventListener("click",function(){
    
    list.innerHTML =""
    arr.map(item=>{
        if(item.toLowerCase().includes(input.value.toLowerCase())){
        
        counter++
            
        let sarr =[]
        let count = 0
        item.split("").map(letter=>{
            if(letter.toLowerCase() == input.value.toLowerCase()){
                sarr.push(`<spen style="background: yellow">${letter}</spen>`)
                count++
            }else{
                sarr.push(letter)
            }
        })
        list.innerHTML += `<li>${sarr.join("")} ${count}</li>`
        result.innerHTML = counter
        }
    })
    if(!input.value){
        list.innerHTML=""
        result.innerHTML = "Please Enter a value"
    }
})

reset.addEventListener("click",function(){
    counter =""
    result.innerHTML = ""
    input.value=""
    list.innerHTML =""
    arr.map(item=>{
        list.innerHTML += `<li>${item}</li>`
    })
})