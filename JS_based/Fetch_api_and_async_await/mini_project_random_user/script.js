const userContent = document.querySelector('.user-content');
const ul = document.querySelector('ul');
const generatebtn = document.querySelector('.generate');
generatebtn.addEventListener('click', () => {
  generateuser();
});

function showLoader(val) {
  let target = document.getElementById('spinner');
  if (val) {
    target.classList.remove('hide');
  } else {
    target.classList.add('hide');
  }
}

function generateuser() {
  showLoader(true);

  fetch('https://randomuser.me/api')
//   fetch('https://randomuser.me/somethingsomething')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Request Failed');
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let result = data.results[0];
      console.log(result);

      let img = document.createElement('img');
      img.src = result.picture.medium;
      img.classList = 'img';
      userContent.innerHTML = ``;
      userContent.appendChild(img);

      if (result.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple';
      } else {
        document.body.style.backgroundColor = 'steelblue';
      }

      let person = {
        name: `${result.name.title} ${result.name.first} ${result.name.last}`,
        email: result.email,
        phone: result.phone,
        nationality: result.nat,
        username: result.login.username,
        password: result.login.password,
      };

      temp = ``;
      for (info in person) {
        temp += `<li><strong> ${info} :</strong> ${person[info]} </li>`;
      }
      showLoader(false);

      ul.innerHTML = temp;
    }).catch(error=>{
        showLoader(false)
        userContent.innerHTML = `<p> Request Failed <br> ${error}</p>`
        console.log(error);
    })
}

generateuser();
