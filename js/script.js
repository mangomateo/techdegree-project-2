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
      } else {
         page++;
      }

      
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);
