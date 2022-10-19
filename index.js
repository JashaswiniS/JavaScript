const ourItem = document.getElementsByClassName('item');
const openIcons = document.getElementsByClassName('iconOpen');
const closeIcons = document.getElementsByClassName('iconClose');

// console.log(ourItem);

for (let i = 0; i < ourItem.length; i++) {
    closeIcons[i].style.display = "none"; 
    ourItem[i].addEventListener('click',() => {
        const result = ourItem[i].classList.toggle("active");
        if(result){
            closeIcons[i].style.display = "block"; 
            openIcons[i].style.display = "none"; 
        }else{
            closeIcons[i].style.display = "none"; 
            openIcons[i].style.display = "block";
        }
    });
    
}