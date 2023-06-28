const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    // body.style.backgroundColor = button.id; //This also works but below one is better

    // body.style.backgroundColor = e.target.id

    // If the color you want to make is not the id then hard code the values of color using switch or if statements

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'purple':
        body.style.backgroundColor = 'purple';
        break;
      case 'dark':
        body.style.backgroundColor = '#333';
        break;
      default:
        body.style.backgroundColor = 'aliceblue';
    }
  })
);
