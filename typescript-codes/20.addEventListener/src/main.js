// document.addEventListener('click', (event) => {
// })
document.addEventListener('keypress', function (event) {
});
function handleEvent(eventName, callback) {
    if (eventName === 'click') {
        callback({ x: 0, y: 0 });
    }
    else if (eventName === 'keypress') {
        callback({ key: 'Enter' });
    }
}
handleEvent('keypress', function (e) { });
