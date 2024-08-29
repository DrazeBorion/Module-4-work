const modeButton = document.querySelector('#modeSwitch');
const light = document.querySelector('.light'); 

let mode = 'light';
modeSwitch.addEvenetListener('click', function () {
if (mode === 'light') {
    mode = 'dark';
    light.setAttribute('class', 'dark');
}
else {
    mode = 'light';
    container.setAttribute('class', 'light')
}
})
