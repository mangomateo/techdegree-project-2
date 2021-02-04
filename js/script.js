/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/




/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = (list, page) => {

   const studentListContainer = document.querySelector('.student-list');
   studentListContainer.innerHTML = '';
   
   const itemsPerPage = 9;

   
   // For loop to iterate over array passed into list param
   // Dynamically generates the HTML for each student's info
   for (let i = 0; i < list.length; i++) {
      let startIndex = (page * itemsPerPage) - itemsPerPage;
      let endIndex = page * itemsPerPage;

      let html = 
      `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${ list[i].picture.large }" alt="Profile Picture">
            <h3>${ list[i].name.first } ${ list[i].name.last }</h3>
            <span class="email">${ list[i].email }</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${ list[i].registered.date }</span>
         </div>
      </li>`;

      if (i >= startIndex && i < endIndex) {
         studentListContainer.innerHTML += html;
      }

      
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = list => {

   const linkListContainer = document.querySelector('.link-list');
   linkListContainer.innerHTML = '';
   let numOfButtons = Math.ceil(list.length / 9);

   // For loop will create as many buttons as determined by numOfButtons
   for (let i = 1; i <= numOfButtons; i++) {
      let buttonHTML = 
      `<li>
         <button type="button">${ [i] }</button>
      </li>`;

      linkListContainer.insertAdjacentHTML('beforeend', buttonHTML);
   }

   linkListContainer.firstElementChild.firstElementChild.classList = 'active';

   // Listen for clicks on buttons, and run showPage() with the new page# as a param
   linkListContainer.addEventListener('click', (e) => {
      let buttonGroup = linkListContainer.children;
      
      if (e.target.tagName === 'BUTTON') {
         showPage(list, parseInt(e.target.textContent));
         
         for (let i = 0; i < buttonGroup.length; i++) {
            buttonGroup[i].firstElementChild.classList = '';
         }
         
         e.target.classList = 'active';         
      }
   }); 
};


// Call functions
showPage(data, 1);
addPagination(data);