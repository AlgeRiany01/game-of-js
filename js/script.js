const img = document.querySelector('img');
var speedText = document.querySelector('.speedText');

window.addEventListener('keydown', moveImg)
let x = 0;
let y = 0;
let speed = 9;


function moveImg(e) {

    switch (e.key) {
        case ('ArrowUp'):
            y -= 1 * speed
            break;
        case ('ArrowDown'):
            y += 1 * speed
            break;
        case ('ArrowRight'):
            x += 1 * speed
            break;
        case ('ArrowLeft'):
            x -= 1 * speed
            break;
        default:
            speedUp(e)
            break;
    }

    img.setAttribute('style', `--x:${x}px; --y:${y}px`)


}


function speedUp(e) {
    if (e.code.includes('Numpad')) {
        speed = e.key * 2;
        speedText.textContent = e.key
        console.warn(`speed is : ${e.key}x`)
    }
}