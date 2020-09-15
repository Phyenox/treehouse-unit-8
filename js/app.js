let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=US`;
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-text");
const modalClose = document.querySelector(".modal-close");


// Fetching the data from the API

fetch(urlAPI)
  .then(response => response.json())
  .then(data => data.results)
  .then(generateData)
  .catch(error => console.log(error))


//   employee data
function generateData (data) {
    employeeInfo = data;
    let html = '';

    // looping through the employees data cards
    employeeInfo.forEach((person, index) => {   
    let name = person.name;
    let email = person.email; 
    let city = person.location.city;
    let picture = person.picture;

    // building the inner HTML for the employees data cards
     html += ` 
     <div class="card">
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
};


// displaying the employee information into the overlay modal
function displayModal(index) {
  let { name, dob, phone, email, location: { city, street, state, postcode }, picture } = employees[index];
  let date = new Date(dob.date);      


    // building the overlay modal for the inner HTML (with p tag to display next arrows)
    let displayCard =`
      <div class="modal">
        <p class="modal-close">X</p>
        <div class="modal-text">
          <img class="avatar" src="${picture.meduim}" alt="${name.first} ${name.last}"/>
          <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
            <hr/>
            <p class="phone">${phone}</p>
            <p class="location">${street.number} ${street.name} ${state} ${postcode}</p>
            <p class="dob">Birthday: ${date.getDate()}/ ${date.getMonth()}/ ${date.getFullYear}</p>
          </div>  
          <p class="left">&lsaquo</p>
          <p class="right">&rsaquo</p>
        </div>
      </div>`;

    // making the overlaydisplay
    overlay.classList.remove('hidden');
    modalContainer.innerHTML = displayCard;
}
    

// adding an event listener to the grid container to display the correct card overlay when clicked 
gridContainer.addEventListener('click', (event) => {
  if(event.target !== gridContainer) {
    const card = event.target.closest(".card");
    const index = card.getAttribute('data-index');
    displayModal(index);
  }
});


