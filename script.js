const search = document.getElementById("search");
const cards = document.querySelectorAll(".album-card");

search.addEventListener("keyup", function(){

    const text = search.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(text)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});