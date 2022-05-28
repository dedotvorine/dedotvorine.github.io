function hide_message() {
    document.getElementById('message').style.opacity = 0;
}

function show_message() {
    document.getElementById('message').innerHTML = quotes[current_index];
    let f_s = 5.5;

    if (quotes[current_index].length > 400) {
        f_s = 4.5;
    }
    
    if (quotes[current_index].split('<br>').length > 6) {
        f_s = 3
    }

    if (f_s < 1) {
        f_s = 1;
    }
    
    document.getElementById('message').style.fontSize = `${f_s}em`;
    document.getElementById('message').style.opacity = 1;
}

var current_index = 0;

document.querySelector('body').addEventListener('click', () => {
    hide_message();
    current_index += 1;
    setTimeout(show_message, 1000);
})

show_message();