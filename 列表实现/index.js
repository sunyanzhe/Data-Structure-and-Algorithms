import List from './List.js'
import Customer from './Customer.js'
import {movies} from './movies.js'



function displayList(list, id) {
    let ul = document.querySelector(`#${id}`),
        str = '';
    for (list.front(); list.currPos() < list.length; list.next()) {
        let item = list.getElement();
        if (item instanceof Customer) {
            str += `<li>${item.name}, ${item.movie}</li>`;
        } else {
            str += `<li>${list.getElement()}</li>`;
        }
    }
    ul.innerHTML = str;
}

function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(name);
        movieList.remove(movie);
    } else {
        alert(`"${movie}"已经没有了`);
    }
}

window.onload = function() {
    let name = 'Sunyz',
        movieList = new List(),
        customers = new List();

    for (let item of movies) {
        movieList.append(item);
    }
    checkOut(name, '教父', movieList, customers);
    displayList(movieList, 'ul1');
    displayList(customers, 'ul2');

}