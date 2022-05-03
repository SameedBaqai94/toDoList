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
        const div = document.getElementById('container');
        for (let list in lists) {
            let movie = lists[list];
            div.innerHTML += markUp(movie)
        }
    }
    const markUp = (movie) => {
        return `
            <div class="content">
                    <h1>${movie.name}</h1>
                    <p>${movie.DateReleased}</p>
            </div>
        `
    }

    return { printList }

}

ui = List();
ui.printList();
