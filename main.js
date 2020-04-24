$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  preventDefault();
  axios
    .get("http://www.omdbapi.com?s=" + searchText + "&apikey=8088643a")
    .then((response) => {
      //   console.log(response);
      let movies = response.data.Search;
      let output = "";
      $.each(movies, (index, movie) => {
        output += `
            <div class='col-md-3 mb-3'>
                <div class='well text-center'>
                <img src='${movie.Poster}'>
                <h5>${movie.Title}</h5>
                <a onclick='movieSelected('${movie.imdbID}')' class='btn btn-primary' href='http://imdb.com/title/${movie.imdbID}'>Movie Details</a>
                </div>
            </div>
            `;
      });
      $("#movies").html(output);
    })
    .catch((err) => console.log(err));
}
