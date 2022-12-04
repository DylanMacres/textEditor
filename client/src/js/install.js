const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //deferring the event 
    window.deferredPrompt = event;
    

    //removing the hidden class show it shows
    butInstall.classList.toggle('hidden', false);


});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    
    if(!promptEvent){
        return;
    }
    //show the install
    promptEvent.prompt();
    window.deferredPrompt = null;
    but

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
