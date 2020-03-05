/**
New FSJS project 2 - List Pagination and Filter - v2 - Data version

Script with starter comments
*/

"use strict";

// GLOBAL VARIABLES - You'll use these below
const studentContainer = document.querySelector('.student-list');
const linkContainer = document.querySelector('.link-list');
const searchContainer = document.querySelector('.header');

const dataList = data.results;
const perPage = 10;


// 1. THE SHOW PAGE FUNCTION

// Create your showPage function, passing it two parameters - list, page
// The showPage function should:

   // Empty the studentContainer element of all its children - quickly accomplished by setting its innerHTML to ''

   // Loop over the list parameter with a standard for loop

      // If (i >= (page * perPage) - perPage && i < page * perPage)
         // Use the studentTemplate below to add students to studentContainer
         // You can concatenate the template to the innerHTML with +=
         // Or you can use the handy insertAdjacentHTML() method

         // HTML template to add student to the DOM
         const studentTemplate = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${formatDate(list[i].registered.date)}</span>
               </div>
            </li>
         `;

// After the showPage function definition,
// Call show the showPage() function passing in the dataList variable and 1 to display the first page



// 2. THE APPEND PAGE LINKS FUNCTION

// Create your appendPageLinks function, passing it one parameter - list
// The appendPageLinks function should:

   // Empty the linkContainer element of all its children - quickly accomplished by setting its innerHTML to ''

   // Create a linkCount variable set to Math.ceil(list.length / perPage); 

   // Loop once for every link - (let i = 0; i < linkCount; i++) 

      // Use the linkTemplate below to add links to studentContainer
      // You can concatenate the template to the innerHTML with +=
      // Or you can use the handy insertAdjacentHTML() method

      // HTML template to add link to the DOM
      const linkTemplate = `<li><a href="#">${i + 1}</a></li>`

   // Set the className of the linkContainer.firstElementChild.firstElementChild to 'active'

   // Add click handler to linkContainer

      // If event.target.tagName === 'A'

         // Create a links variable to target the pagination links - document.querySelectorAll('.link-list a')

         // Loop over links and set their className to ''

         // After loop, set the className of the event.target to 'active'

         // Call showPage passing in the list parameter and event.target.innerHTML for the page number


// After the appendPageLinks function definition,
// Call show the appendPageLinks() function passing in the dataList variable


// Feel free to try out adding the search feature and pagination search results
