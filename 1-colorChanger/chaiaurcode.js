const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    // body.style.backgroundColor = button.id; //This also works but below one is better

    body.style.backgroundColor = e.target.id;
  })
);
