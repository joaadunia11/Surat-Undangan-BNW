function openInvitation() {
    const guestInput = document.getElementById('guest-name-input').value;
    const guestDisplay = document.getElementById('guest-name-display');
    
    if (guestInput.trim() === "") {
        alert("Mohon masukkan nama Anda terlebih dahulu.");
        return;
    }

    guestDisplay.innerText = guestInput;

    const welcomeScreen = document.getElementById('welcome-screen');
    const mainInvitation = document.getElementById('main-invitation');

    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.visibility = 'hidden';

    mainInvitation.classList.remove('d-none');
    
    setTimeout(() => {
        mainInvitation.classList.add('show-invitation');
    }, 100);
}