const filme1 = {
    Thumb: '<a href="https://youtu.be/NlqVxm0azMk" target="_blank"><img class="thumb" src="img/clubeDaLuta.jpg" alt="Poster do Filme Clube da Luta"></a>',
    Título: 'Clube da Luta',
    Sinópse: 'Um trabalhador de escritório e um fabricante de sabonetes que cuidam do diabo formam um clube de luta clandestino que evolui para algo muito maior.',
    Duração: 139,
    Ano: 1999,
    Gênero: 'Drama',
    Oscar: false,
    Diretor: 'David Finscher',
    Elenco: ['Brad Pitt', 'Edward Norton', 'Meat Loaf', 'Helena Bonham']};

const filme2 = {
    Thumb: '<a href="https://youtu.be/VJ6Dk2_dp7M" target="_blank"><img class="thumb" src="img/sonhoDeLiberdade.png" alt="Poster do Filme Um Sonho de Liberdade"></a>',
    Título: 'Um Sonho de Liberdade',
    Sinópse: 'Dois homens presos se reúnem ao longo de vários anos, encontrando consolo e eventual redenção através de atos de decência comum.',
    Duração: 142,
    Ano: 1994,
    Gênero: 'Drama',
    Oscar: false,
    Diretor: 'Frank Darabont',
    Elenco: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'Willim Sadler']};

const filme3 = {
    Thumb: '<a href="https://youtu.be/2O4gbUktWss" target="_blank"><img class="thumb" src="img/forrestGump.jpg" alt="Poster do Filme Forrest Gump"></a>',
    Título: 'Forrest Gump: O Contador de Histórias',
    Sinópse: 'As presidências de Kennedy e Johnson, os eventos do Vietnã, Watergate e outra história são desenvolvidos através da perspectiva de um homem do Alabama com um alto quociente Intelectual.',
    Duração: 142,
    Ano: 1994,
    Gênero: 'Drama',
    Oscar: true,
    Diretor: 'Robert Zemeckis',
    Elenco: ['Tom Hanks', 'Robin Wright', 'Gary Sinise', 'Sally Field']};

const filme4 = {
    Thumb: '<a href="https://youtu.be/8zscp5a7gk0" target="_blank"><img class="thumb" src="img/lalaLand.jpg" alt="Poster do Filme LaLaLand"></a>',
    Título: 'La La Land: Cantando Estações',
    Sinópse: 'Um pianista é uma frustrada actora se apaixonam enquanto tentam trabalhar por seus futuros.',
    Duração: 128,
    Ano: 2016,
    Gênero: 'Romance',
    Oscar: true,
    Diretor: 'Damien Chazelle',
    Elenco: ['Ryan Gosling', 'Emma Stone', 'J.K Simmons', 'Rosemarie Dewitt']};

const filme5 = {
    Thumb: '<a href="https://youtu.be/za_ay2GrxJU" target="_blank"><img class="thumb" src="img/ondeOsFracosNãoTemVez.jpg" alt="Poster do Filme Onde os Fracos Não Tem Vez"></a>',
    Título: 'Onde os Fracos Não Têm Vez',
    Sinópse: 'Violença e caos surge quando um caçador se encontra com um negoço de drogas errado e mais de dois milhões de dolares perto do Rio Grande.',
    Duração: 122,
    Ano: 2007,
    Gênero: 'Suspense',
    Oscar: true,
    Diretor: 'Irmãos Coen',
    Elenco: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin', 'Woody Harrelson']};

const filmes = [filme1, filme2, filme3, filme4, filme5];
const listas = document.getElementsByClassName('filme')
let media = 0

for (let [index, filme] of filmes.entries()) {
    listas[index].innerHTML = filme.Thumb
    for (let atributo in filme) {
        const newElement = document.createElement('li');
        let elementContent = document.createTextNode('')
        switch(atributo) {
            case 'Título':
                elementContent = document.createTextNode(`${filme[atributo]}`)
            break;
            case 'Duração':
                elementContent = document.createTextNode(`${atributo}: ${filme[atributo]} minutos`)
            break;
            case 'Oscar':
                filme[atributo] === true? elementContent = document.createTextNode(`${atributo}: ✔️`):
                elementContent = document.createTextNode(`${atributo}: ❌`)
            break;
            case 'Elenco':
                elementContent = document.createTextNode(`${atributo}: ${filme[atributo].join(', ')}`)
            break;
            case 'Thumb':
            break;
            default:
                elementContent = document.createTextNode(`${atributo}: ${filme[atributo]}`)
        }
        newElement.appendChild(elementContent);
        listas[index].appendChild(newElement)
    }

    listas[index].removeChild(listas[index].getElementsByTagName('li')[0])
    media += filme.Duração
    console.log(filme)
}
console.log('Média de duração:', media/5, 'minutos')
console.log(filmes.map(
    temOscar = (filme) => {
        return `${filme.Título} tem oscar? ${filme.Oscar === true}`;
    }
).join('\n'));

const campoPesquisa = document.getElementById('pesquisa')
campoPesquisa.addEventListener('mouseleave', (event) => {
    event.target.style.border = ''
    event.target.setAttribute('placeholder', 'Pesquisar por título')
})

function pesquisar() {
    if (campoPesquisa.value === '') {
        campoPesquisa.setAttribute('placeholder','Campo Vazio! Digite o Título do Filme...')
        campoPesquisa.style.border = "2px solid red"
    } else {
        const filmeFiltrado = filmes.filter((filme) => filme.Título.toLowerCase().includes(campoPesquisa.value.toLowerCase()))
        const container = document.getElementById('container');
        container.innerHTML = `<ul class="filme">${filmeFiltrado[0].Thumb}</ul>`;
        for (let atributo in filmeFiltrado[0]) {
            const newElement = document.createElement('li');
            let elementContent = document.createTextNode('')
            switch(atributo) {
                case 'Título':
                    elementContent = document.createTextNode(`${filmeFiltrado[0][atributo]}`)
                break;
                case 'Duração':
                    elementContent = document.createTextNode(`${atributo}: ${filmeFiltrado[0][atributo]} minutos`)
                break;
                case 'Oscar':
                    filmeFiltrado[0][atributo] === true? elementContent = document.createTextNode(`${atributo}: ✔️`):
                    elementContent = document.createTextNode(`${atributo}: ❌`)
                break;
                case 'Elenco':
                    elementContent = document.createTextNode(`${atributo}: ${filmeFiltrado[0][atributo].join(', ')}`)
                break;
                case 'Thumb':
                break;
                default:
                    elementContent = document.createTextNode(`${atributo}: ${filmeFiltrado[0][atributo]}`)}
            newElement.appendChild(elementContent);
            listas[0].appendChild(newElement)
        }
        listas[0].removeChild(listas[0].getElementsByTagName('li')[0])
        campoPesquisa.value = ''
    }}
