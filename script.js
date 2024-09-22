const searchField = document.getElementById("inputField");
const armoryList = document.querySelectorAll("#armoryList li");


searchField.addEventListener("input", (evt)=>{
    const searchValue = evt.target.value.toLowerCase();

    armoryList.forEach(item => {
        if(item.textContent.toLowerCase().includes(searchValue)){
            item.style.display = "";
        }else{
            item.style.display = "none"
        }
    });
})



