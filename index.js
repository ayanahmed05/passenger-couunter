// grab the welcome-el paragraph and store it in a variable called welcome-el
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let count=0
let cntel=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
function increment(){
    count+=1
    cntel.innerText=count;

}
function decrement(){
    count-=1

   

cntel.innerText=count;

}

function save() {// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

// let string = numbro(count).format({thousandSeparated: true,
//     forceSign: true,negative: "parenthesis",});
let countstr
if(count<0)  countstr =" ( "+count+" ) - "
else countstr =count+" - "
// if  "(" +count+" )"
// '1,000'
// console.
// let countstr = string + " - "
saveEl.innerText+=countstr

cntel.innerText=0;
count=0;
    console.log(count)
}

const show=()=>{
    let welcomeEl=document.getElementById("welcome-el")
    let name= "ayan"
    let greeting ="welcome back!"
    let input=document.getElementById("cred")
    console.log(welcomeEl.innertext, 'val')
    if (input.value=="ayan")
    {welcomeEl.innerText= greeting + name
    welcomeEl.innerText+="👋"}
    else{
alert('auth failed')
    }
}



