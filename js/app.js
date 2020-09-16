let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`;
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");


// Fetching the data from the API

fetch(urlAPI)
  .then(response => response.json())
  .then(data => data.results)
  .then(generateData)
  .catch(error => console.log(error))


//   employee data

function generateData (edata) {
    employees = edata;
    let html = '';

    // looping through the employees data cards
    employees.forEach((person, index) => {   
    let name = person.name;
    let email = person.email; 
    let city = person.location.city;
    let picture = person.picture;

    // building the inner HTML for the employees data cards
     html += ` 
     <div class="card" data-index="${index}">
       <img class="avatar" src="${picture.medium}" alt="${name.first} ${name.last}"/>
         <div class="text-container">
           <h2 class="name">${name.first} ${name.last}</h2>
           <p class="email">${email}</p>
           <p class="address">${city}</p>
         </div>
      </div> `;

      // Inserting the cards into the inner HTML div
      gridContainer.innerHTML = html;
  })
}


// displaying the employee information into the overlay modal

function displayModal(index) {
  let { name, dob, phone, email, location: { city, street, state, postcode }, picture } = employees[index];
  let date = new Date(dob.date);    

  // building the overlay modal for the inner HTML 
  const displayCard =`
          <img class="avatar" src="${picture.large}" alt="Photo of ${name.first} ${name.last}">
          <div class="modal-text">
                  <h2 class="name">${name.first} ${name.last}</h2>
                  <p class="email">${email}</p>
                  <p class="address">${city}</p>
                  <hr/>
                  <p>${phone}</p>
                  <p class="address">${street.number} ${street.name}, ${state} ${postcode}</p>
                  <p>Birthday: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</p>
          </div>
          `;
           
    // making the overlay visable within the innerHTML
    overlay.classList.remove('hidden');
    modalContainer.innerHTML = displayCard;
}

// adding an event listener to the grid container to display the correct card overlay when clicked 
gridContainer.addEventListener('click', e => {
  if(e.target !== gridContainer) {
    const card = e.target.closest(".card");
    const index = card.getAttribute('data-index');
    displayModal(index);

    let indexNum = parseInt(index);

    // Selecting the arrows in the HTML
    const leftArrow = document.querySelector(".left");
    const rightArrow = document.querySelector(".right");

  // Creating an if else statement to click through each card based on its index number
  // Then returning to the the start/end if its the first/last card
    leftArrow.addEventListener('click', () => {
      if(indexNum < 11) {
      indexNum += 1;
      displayModal(indexNum);
      } else if (indexNum === 11) {
        indexNum = 0;
        displayModal(indexNum);
      }
    });
    
    rightArrow.addEventListener('click', () => {
      if(indexNum > 0) {
        indexNum -= 1;
        displayModal(indexNum);
        } else if (indexNum === 0) {
          indexNum = 11;
          displayModal(indexNum);
        }    
    });
}}); 

// Creating a click event to close the overlay
modalClose.addEventListener('click', () => {
   overlay.classList.add('hidden');
});


// Creating a search
function searchField() {
  

}