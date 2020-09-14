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
  .then(employeeData)


//   employee data

function employeeData(eData) {
    employee = eData;
    let html = '';

    // looping through the employees data cards



    // building the inner HTML for the employees data cards
    html += ` 
     <div class="card">
      <img class="avatar" src="member-1.jpg"/>
       <div class="text-container">
         <h2 class="name">Light Yagami</h2>
         <p class="email">light@email.com</p>
         <p class="address">Chicago</p>
       </div>
     </div> `
}


// Inserting the grid container into the inner HTML div



// displaying the employee information into the overlay modal

function overlayModal(index){


    // finding the data-index number of the previous and next employees


    // storing the total number of employees in the list for the navigation arrows in the overlay



    // building the overlay modal for the inner HTML (with p tag to display arrows)



    // making the overlaydisplay



    // selecting the arrows in the HTML




    // making the arrow loop even if the employee is first or last in the index using an event listener

}


// adding an event listener to the grid container to display the correct card overlay when clicked 



// hiding the overlay modal when X is clicked using an event listerner





// creating a search input
function search() {


    // using a for loop to hide list items that dont match the search
}

