// Event 1: Click Event
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

// Event 2: Mouseover Event
document.getElementById('hoverArea').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});
document.getElementById('hoverArea').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Event 3: Keydown Event
document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Enter key pressed in the text input!');
    }
});

// Event 4: Change Event
document.getElementById('textInput').addEventListener('change', function() {
    console.log('Input value changed to: ' + this.value);
});

// Event 5: Submit Event
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Form submitted with input: ' + document.getElementById('formInput').value);
});
