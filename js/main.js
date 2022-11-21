
 var elInputTitle = document.querySelector("[data-input-search-title]");
 var elForm = document.querySelector("[data-form]");
 var elUl = document.querySelector("[data-ul]");


 renderMovies();

 elForm.addEventListener("submit" , function (evt) {
    evt.preventDefault();


    var movie = {
        title: null ,
    };

    movie.title = elInputTitle.value;
    movies.unshift(movie);
    elUl.prepend(creatLi(movie));

 });


 function renderMovies(){
    elUl.innerHTML = "";
    for( i=0; i < movies.length; i++){
        movie= movies[i];
        elUl.appendChild(creatLi(movie));
    }
 }

 function creatLi(movie){

    var elLi = document.createElement("li")
    var elH3 = document.createElement("h3")

    elH3.textContent = `${movie.title}`;

    elLi.appendChild(elH3);

    elLi.style.listStyleType = "none";
    elUl.style.display = "flex"
    elUl.style.flexWrap = "wrap"
    elUl.style.gap = "40px"
    elH3.style.textAlign = "center";
    elH3.style.fontSize = "24px" 
    elH3.style.cursor = "pointer" 


    return elLi
 };

