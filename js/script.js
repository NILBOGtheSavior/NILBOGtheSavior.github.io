document.addEventListener("DOMContentLoaded", () => {
    // mode initialization
    const root = document.querySelector(':root');
    if (sessionStorage.getItem("mode")) {
        root.classList.add(sessionStorage.getItem('mode'));
    } else {
        sessionStorage.setItem("mode", "lightmode");
    }
    // injector initialization
    basicElements();
});


// injector

async function basicElements() {
    try {
        // since I need to access another file, we must use the await command to wait for the required data to store in the variable.
        let lightswitchHTML = await fetchInnerHTML('/modules/lightswitch.html');
        let lightswitch = document.body.appendChild(document.createElement('div'));
        lightswitch.innerHTML = lightswitchHTML;
        document.body.insertAdjacentHTML('afterbegin', await fetchInnerHTML('/modules/header.html'));
        document.body.insertAdjacentHTML('beforeend', await fetchInnerHTML('/modules/footer.html'));

        svgInjector();
    } catch (error) {
        console.error('Error setting the header:', error);
    }
}

    // svg injector
    async function svgInjector() {
        let svgList = document.querySelectorAll('svg');
        // console.log(svgList);
        for (let i = 0; i < svgList.length; i++) {
            svg = svgList[i];
            if (svg.getAttribute('icon')) {
                let imageName = "/img/icons/" + svg.getAttribute('icon') + ".svg";
                svg.innerHTML = await fetchInnerHTML(imageName);
            }
            
        }
    }

    async function fetchInnerHTML(headerFilePath) {
        try {
            const response = await fetch(headerFilePath); // Fetch the file content
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return await response.text(); // Return the content as a resolved promise
        } catch (error) {
            console.error('Error fetching the file:', error);
            throw error; // Rethrow the error to handle it in the calling function
        }
    }


//  lightswitch functions



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


function initializeLightSwitch() {
    const switchContainer = document.getElementById('switch-container');
    const lightSwitch = document.getElementById('light-switch');
    let isDragging = false;
    let offsetX, offsetY;

    // Enable dragging
    lightSwitch.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - switchContainer.offsetLeft;
        offsetY = e.clientY - switchContainer.offsetTop;
        lightSwitch.style.animation = 'none'; // Stop swinging while dragging
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            switchContainer.style.left = `${e.clientX - offsetX}px`;
            switchContainer.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        lightSwitch.style.animation = ''; // Resume swinging after dragging
    });
}