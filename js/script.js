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
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   
   // For loop to iterate over array passed into list param
   // Dynamically generates the HTML for each student's info
   for (let i = 0; i < list.length; i++) {
      let listItem = list[i];
      let html = 
      `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${ listItem.picture.large }" alt="Profile Picture">
            <h3>${ listItem.name.first } ${ listItem.name.last }</h3>
            <span class="email">${ listItem.email }</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${ listItem.registered.date }</span>
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



// Call functions
showPage(data, 1);
