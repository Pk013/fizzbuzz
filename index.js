for(let i= 1; i <= 1000; i++){
    const div = document.createElement("div");
    div.textContent = i;
    if(i % 2 == 0){
        div.classList.add("bold");
    }
    if(i % 3 == 0){
        div.classList.add("red")

    }
    document.body.appendChild(div)
}