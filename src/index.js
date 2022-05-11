const addMovieBtn = document.getElementById('addBtn');
const closeForm = document.getElementById('close');
const addMovieForm = document.getElementById('addBook');
const submitBtn = document.getElementById('submit');
const movie = document.getElementById('movie');
const date = document.getElementById('date');
const div = document.getElementById('container');
const search = document.getElementById('search');

const List = () => {
    let lists = [{
        "name": "The Batman",
        "DateReleased": "04-04-2022"
    }, {
        "name": "Sonic 2",
        "DateReleased": "03-04-2022"
    }, {
        "name": "Thor",
        "DateReleased": "06-04-2022"
    }];

    const printList = () => {

        for (let list in lists) {
            let movie = lists[list];
            div.innerHTML += markUp(movie)
        }
    }

    const addMovie = (name, date) => {
        return lists.push({ "name": name, "DateReleased": date })
    }

    const markUp = (movie) => {
        return `
            <div class="content">
                    <h1>${movie.name}</h1>
                    <p>${movie.DateReleased}</p>
            </div>
        `
    }

    const filter = (name) => {
        let nameList = lists.map(list => list.name);

        let renderHTML = ""
        nameList.forEach(movie => {
            if (movie.toUpperCase().indexOf(name) !== -1) {

                let date = lists.find((d) => {
                    if (d.name === movie) {
                        return d;
                    }
                })

                renderHTML += `
                            <div class="content">
                                    <h1>${movie}</h1>
                                    <p>${date.DateReleased}</p>
                            </div>
                        `
                console.log(renderHTML)
            }
        })
        div.innerHTML = renderHTML;
    }

    return { printList, addMovie, filter }

}

ui = List();
ui.printList();
addMovieBtn.addEventListener('click', () => {
    addMovieForm.style.display = 'block';
})

closeForm.addEventListener('click', () => {
    addMovieForm.style.display = 'none';
})

submitBtn.addEventListener('click', () => {
    ui.addMovie(movie.value, date.value);
    div.innerHTML = "";
    ui.printList();
})

search.addEventListener('keyup', () => {
    if (search.value == '') {
        div.innerHTML = '';
        ui.printList();
    }
    ui.filter(search.value.toUpperCase());
})