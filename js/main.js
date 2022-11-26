
 var elInputTitle = document.querySelector("[data-input-title]");
 var elForm = document.querySelector("[data-form]");
 var elUl = document.querySelector("[data-ul]");
 var imgUrl = "https://image.tmdb.org/t/p/w500";
 var elInputImg = document.querySelector("[data-input-img]")


 renderMovie();

elForm.addEventListener("click", function(evt){
   evt.preventDefault();

   var movie = {
      title: null,
      poster_path: null,
   };

   elInputTitle.value = movie.title;
   elInputImg.value = movie.poster_path;

   movies.unshift(movie);
   elUl.prepend(createLi(movie));
});


    function renderMovie(){
      elUl.innerHTML = "";

      for ( i = 0; i < movies.length; i++ ){
         movie = movie[i]; 
      }
      

      var elLi = document.createElement("li");
      var elImg  = document.createElement("img");
      var elSpan  = document.createElement("span");
   
      elImg.src = `${imgUrl}${movie.poster_path}`;
      elSpan.textContent = `${movie.title} - ${movie.vote_average}`;

      elLi.appendChild(elSpan);
      elLi.appendChild(elImg);

      elUl.appendChild(elLi);

   
      return elLi;
    }

  


