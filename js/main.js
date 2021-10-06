var elList = document.querySelector('.list');
var elInput = document.querySelector('.form__input');
var elSelect = document.querySelector('.select');
var elSortSelect = document.querySelector('.select-sort');

elList.innerHTML = null;

function generateGenres(films, node) {
	var result = [];

	films.forEach((film) => {
		film.genres.forEach((genre) => {
			if (!result.includes(genre)) {
				result.push(genre);
			}
		});
	});

	result.forEach((genre) => {
		const newOption = document.createElement('option');
		newOption.value = genre;
		newOption.textContent = genre;
		node.appendChild(newOption);
	});
}



function renderFilms(arr, node) {
	elList.innerHTML = null;
	arr.forEach((film) => {
		var newLi = document.createElement('li');
		var newHeading = document.createElement('h4');
		var newImage = document.createElement('img');
		var newParagraph = document.createElement('p');
		var newTime = document.createElement('time');
		var newGenreHeadding = document.createElement('p');
		var newGenreList = document.createElement('ul');
        
		newHeading.textContent = film.title.split(' ').slice(0, 3).join(' ');
		newParagraph.textContent =
			film.overview.split(' ').slice(0, 8).join(' ') + '...';
		newGenreHeadding.textContent='Genres: '
		newTime.textContent = normalizeDate(film.release_date);
			
			for (var genre of film.genres) {
				var newGenreLi = document.createElement('li');

				newGenreLi.setAttribute('class', 'genre-list__item');

				newGenreLi.textContent = genre + ' /';

				newGenreList.appendChild(newGenreLi);
			}
			
		newLi.setAttribute('class', 'list__item ');
		newHeading.setAttribute('class', 'film__heading');
		newImage.setAttribute('class', 'film__image');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');
		newImage.setAttribute('width', '200');
		newImage.setAttribute('height', '200');
		newParagraph.setAttribute('class', 'film__paragrf');
		newGenreHeadding.setAttribute('class', 'genre-headding');
		newGenreList.setAttribute('class', 'genre-list');
		newTime.setAttribute('class', 'film__date');
		
        
		newLi.appendChild(newHeading);
		newLi.appendChild(newImage);
		newLi.appendChild(newParagraph);
		newLi.appendChild(newGenreHeadding);
		newLi.appendChild(newGenreList);
		newLi.appendChild(newTime);

		node.appendChild(newLi);
	});
}

var sortedF = {
	0: (a, b) => {
		if (a.title < b.title) {
			return -1;
		}
		if (a.title > b.title){
			return 1;
		}
		return 0;
	},
	1: (a, b) => {
		if (a.title < b.title) {
			return 1;
		}
		if (a.title > b.title){
			return -1;
		}
		return 0;
	},

	2: (a, b) => b.release_date - a.release_date,
	3: (a, b) => a.release_date - b.release_date,

}

form.addEventListener('submit', (evt) => {
	evt.preventDefault();
	var InputValue = elInput.value.trim();
	var SelectValue = elSelect.value;
	var sortvalue = elSortSelect.value;

	var searchFilm = new RegExp(InputValue,'gi');


	var selectedFilms = [];

	if (SelectValue === 'all') {
		selectedFilms = films.filter(film=> film.title.match(searchFilm));
	}else{
		selectedFilms = films.filter(film => film.genres.includes(SelectValue)).filter(film=> film.title.match(searchFilm));
	}

	
	selectedFilms.sort(sortedF[sortvalue]);
	renderFilms(selectedFilms, elList);
	
	// ganri bo'ycha sarterofka =================================
	// var selectedFilms = films.filter(film => 
	//     film.genres.includes(SelectValue),
	// );
	// console.log(selectedFilms);
    
});

renderFilms(films, elList);
generateGenres(films, elSelect);
