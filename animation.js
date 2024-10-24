const box = document.getElementById('box');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    let position = 0;
    let direction = 1; // 1 for right, -1 for left

    const animationInterval = setInterval(() => {
        // Move the box
        position += 5 * direction; // Move by 5 pixels

        // Change the box color based on its position
        if (position >= 500) {
            direction = -1; // Change direction to left
            box.style.backgroundColor = 'blue'; // Change color to blue
        } else if (position <= 0) {
            direction = 1; // Change direction to right
            box.style.backgroundColor = 'red'; // Change color back to red
        }

        box.style.left = position + 'px'; // Update the position
    }, 30); // Run the animation every 30 milliseconds
});
