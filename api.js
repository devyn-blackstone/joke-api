document.addEventListener('click', function (event) {
  // Checking if the button was clicked
  if (!event.target.matches('#button')) return;

  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json())
    .then((data) => renderJoke(data))
    .catch(() => renderError());
});

function renderJoke(data) {
  const setup = document.getElementById('setup');
  const punchline = document.getElementById('punchline');
  const error = document.getElementById('error');
  setup.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
  error.innerHTML = '';
}

function renderError() {
  const error = document.getElementById('error');
  error.innerHTML = "We've run into a snag - don't worry we are on it!";
}
