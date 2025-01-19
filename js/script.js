document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector(':root');
    if (sessionStorage.getItem("mode")) {
        root.classList.add(sessionStorage.getItem('mode'));
    } else {
        sessionStorage.setItem("mode", "lightmode");
    }

    
});

function switchMode() {
    const root = document.querySelector(':root');
    let mode = sessionStorage.getItem('mode');
    // console.log(mode);
    if (mode == 'lightmode') {
        sessionStorage.setItem("mode", "darkmode");
        root.classList.remove('lightmode');
        root.classList.add('darkmode');
    } else if (mode == 'darkmode') {
        sessionStorage.setItem("mode", "lightmode");
        root.classList.remove('darkmode');
        root.classList.add('lightmode');
    }
    
}