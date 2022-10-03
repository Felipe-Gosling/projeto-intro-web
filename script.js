const filme1 = {
    Título: 'Clube da Luta',
    Sinópse: 'Um trabalhador de escritório e um fabricante de sabonetes que cuidam do diabo formam um clube de luta clandestino que evolui para algo muito maior.',
    Duração: 139,
    Ano: 1999,
    Gênero: 'Drama',
    Oscar: false,
    Diretor: 'David Finscher',
    Elenco: ['Brad Pitt', 'Edward Norton', 'Meat Loaf', 'Helena Bonham']};

const filme2 = {
    Título: 'Um Sonho de Liberdade',
    Sinópse: 'Dois homens presos se reúnem ao longo de vários anos, encontrando consolo e eventual redenção através de atos de decência comum.',
    Duração: 142,
    Ano: 1994,
    Gênero: 'Drama',
    Oscar: false,
    Diretor: 'Frank Darabont',
    Elenco: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'Willim Sadler']};

const filme3 = {
    Título: 'Forrest Gump: O Contador de Histórias',
    Sinópse: 'As presidências de Kennedy e Johnson, os eventos do Vietnã, Watergate e outra história são desenvolvidos através da perspectiva de um homem do Alabama com um alto quociente Intelectual.',
    Duração: 142,
    Ano: 1994,
    Gênero: 'Drama',
    Oscar: true,
    Diretor: 'Robert Zemeckis',
    Elenco: ['Tom Hanks', 'Robin Wright', 'Gary Sinise', 'Sally Field']};

const filme4 = {
    Título: 'La La Land: Cantando Estações',
    Sinópse: 'Um pianista é uma frustrada actora se apaixonam enquanto tentam trabalhar por seus futuros.',
    Duração: 128,
    Ano: 2016,
    Gênero: 'Romance',
    Oscar: true,
    Diretor: 'Damien Chazelle',
    Elenco: ['Ryan Gosling', 'Emma Stone', 'J.K Simmons', 'Rosemarie Dewitt']};

const filme5 = {
    Título: 'Onde os Fracos Não Têm Vez',
    Sinópse: 'Violença e caos surge quando um caçador se encontra com um negoço de drogas errado e mais de dois milhões de dolares perto do Rio Grande.',
    Duração: 122,
    Ano: 2007,
    Gênero: 'Suspense',
    Oscar: true,
    Diretor: 'Irmãos Coen',
    Elenco: ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin', 'Woody Harrelson']};

filmes = [filme1, filme2, filme3, filme4, filme5];
const container = document.getElementsByClassName('filme')

for (let [index, filme] of filmes.entries()) {
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
            default:
                elementContent = document.createTextNode(`${atributo}: ${filme[atributo]}`)
        }
        newElement.appendChild(elementContent);
        container[index].appendChild(newElement)
    }
}
