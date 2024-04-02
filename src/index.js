const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", function (event){
    event.preventDefault();
    const inputList = event.target.children;
    const chosenId = inputList[1].value;

    fetch(`http://localhost:3000/movies/${chosenId}`)
    .then(response => response.json())
    .then(function(movieData){
        const movieDetails = document.getElementById("movieDetails");
        const movieHeader = movieDetails.querySelector("h4");
        const movieSummary = movieDetails.querySelector("p");
        movieHeader.innerText = movieData.title;
        movieSummary.innerText = movieData.summary;
    })
  });
}

document.addEventListener('DOMContentLoaded', init);