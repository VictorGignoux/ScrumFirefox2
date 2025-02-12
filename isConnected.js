document.addEventListener('DOMContentLoaded', () => {
	let isConnected = localStorage.getItem("isConnected");
    if(isConnected === true)
    {
        window.location.href = 'masterMode.html';
    }
});