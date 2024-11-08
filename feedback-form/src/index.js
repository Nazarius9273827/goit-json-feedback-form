import { saveFeedback } from './feedbackData';

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    saveFeedback(name, email, message);

    document.getElementById('successMessage').style.display = 'block';

    event.target.reset();
});