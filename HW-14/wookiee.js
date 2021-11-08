const characterPhotos = {
  'https://swapi.dev/api/people/1/': 'luke',
  'https://swapi.dev/api/people/24/': 'bossk',
  'https://swapi.dev/api/people/2/': 'c3po',
  'https://swapi.dev/api/people/3/': 'r2-d2',
  'https://swapi.dev/api/people/4/': 'dartvader',
  'https://swapi.dev/api/people/5/': 'leiaorgana',
  'https://swapi.dev/api/people/10/': 'obi-wankenobi',
  'https://swapi.dev/api/people/13/': 'chewbacca',
  'https://swapi.dev/api/people/14/': 'hansolo',
  'https://swapi.dev/api/people/18/': 'wedgeantilles',
  'https://swapi.dev/api/people/20/': 'yoda',
  'https://swapi.dev/api/people/21/': 'palpatine',
  'https://swapi.dev/api/people/22/': 'bobafett',
  'https://swapi.dev/api/people/23/': 'ig-88',
  'https://swapi.dev/api/people/25/': 'landocalrissian',
  'https://swapi.dev/api/people/26/': 'lobot',
}
const characterList = document.getElementById('characterList');
const filmIdField = document.getElementById('filmIdField');
const filmTitle = document.getElementById('filmTitle');
const loadDataButton = document.getElementById('loadDataButton');
async function loadMovieById(movieId) {
  const filmResponse = await fetch(`https://swapi.dev/api/films/${ movieId }/`);
  const filmData = await filmResponse.json();
  const { characters: rawCharacters, title } = filmData;
  const characters = [];
  for (const characterUrl of rawCharacters) {
    const characterResponse = await fetch(characterUrl);
    const characterData = await characterResponse.json();
    const { name: fullName, birth_year: birthday, gender, url: id } = characterData
    characters.push({
      fullName,
      birthday,
      gender: (
        gender === 'n/a'
          ? '🚫'
          : gender === 'male'
            ? '🚹'
            : '🚺'
      ),
      image: (
        id in characterPhotos
          ? `photos/${ characterPhotos[id] }.jpg`
          : 'photos/nophoto.jpg'
      ),
    });
  }
  return {
    characters,
    title,
  }
}

loadDataButton.addEventListener('click', async () => {
  document.body.style.backgroundSize = 'cover';
  filmTitle.innerHTML = '';
  characterList.innerHTML = '';
  const { characters, title } = await loadMovieById(filmIdField.value);
  filmTitle.innerText = title;
  for (const character of characters) {
    const { fullName, birthday, gender, image } = character;
    const characterElement = document.createElement('DIV');
    characterElement.classList.add('character');
    const characterImageElement = document.createElement('IMG');
    characterImageElement.src = image;
    characterElement.appendChild(characterImageElement);
    const characterInfoList = document.createElement('UL');
    const characterName = document.createElement('LI');
    characterName.innerHTML = `Ім'я: <strong>${ fullName }</strong>`;
    characterInfoList.appendChild(characterName);
    const characterBirthday = document.createElement('LI');
    characterBirthday.innerHTML = `Дата народження: <strong>${ birthday }</strong>`;
    characterInfoList.appendChild(characterBirthday);
    const characterGender = document.createElement('LI');
    characterGender.innerHTML = `Стать: <strong>${ gender }</strong>`;
    characterInfoList.appendChild(characterGender);
    characterElement.appendChild(characterInfoList);
    characterList.appendChild(characterElement);
  }
})

const planetList = document.getElementById('planetList');
const previousPlanetsButton = document.getElementById('previousPlanetsButton');
const nextPlanetsButton = document.getElementById('nextPlanetsButton');
let currentPage = 0;
async function loadPlanets() {
  const planetResponse = await fetch(
    `https://swapi.dev/api/planets/?page=${ currentPage }`, {
      cache: 'no-cache',
    },
  )
  const { status } = planetResponse;
  if (status !== 404) {
    console.log(planetResponse);
    const planetData = await planetResponse.json();
    const { results: planets } = planetData;
    planetList.innerHTML = '';
    for (const planet of planets) {
      const { name } = planet;
      const planetElement = document.createElement('DIV');
      planetElement.classList.add('planet');
      planetElement.innerText = name;
      planetList.appendChild(planetElement);
    }
  } else {
    currentPage--;
  }
}
previousPlanetsButton.addEventListener('click', async () => {
  if (currentPage > 1) {
    currentPage--;
  }
  await loadPlanets();
})
nextPlanetsButton.addEventListener('click', async () => {
  currentPage++;
  await loadPlanets();
})
window.addEventListener('load', async () => {
  currentPage++;
  await loadPlanets();
})
