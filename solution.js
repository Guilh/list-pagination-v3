/******************************************
FSJS project 2 - List Pagination and Filter

-- My solution
******************************************/
/**
New FSJS project 2 - List Pagination and Filter - v2 - Data version
*/

"use strict";

const dataList = data;
const studentContainer = document.querySelector('.student-list');
const linkContainer = document.querySelector('.link-list');
const searchContainer = document.querySelector('.header');

const perPage = 10;


/**
 Show page function - shows the selected page of students
 @param list - List of students to be paginated
 @param page - Page number to be shown
*/
const showPage = (list, page) => {

   // Empty student container
   studentContainer.innerHTML = '';

   // Start and end page items
   const pageStart = (page * perPage) - perPage;
   const pageEnd = page * perPage;

   // Loop over list parameter and show items between page start and page end indexes
   for (let i = 0, j = list.length; i < j; i++) {

      // If list item falls in the desired range
      if (i >= pageStart && i < pageEnd) {

         // Format date for list item
         const formattedDate = formatDate(list[i].registered.date);

         // HTML template to add to DOM
         const studentTemplate = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${formattedDate}</span>
               </div>
            </li>
         `;

         // Add with insertAdjacentHTML - faster than innerHTML
         studentContainer.insertAdjacentHTML('beforeend', studentTemplate);
      } 
   }
};

showPage(dataList, 1);


/**
 Append page links function - Create and append pagination links for list
 @param list - List of students to be paginated
*/
const appendPageLinks = (list) => {

   // Empty link container
   linkContainer.innerHTML = '';

   // Number of page links - List parameter length divided by perPage variable, rounded up
   const linkCount = Math.ceil(list.length / perPage); 

   // Loop to add links
   for (let i = 0; i < linkCount; i++) {
      
      // Add with insertAdjacentHTML - faster than innerHTML
      linkContainer.insertAdjacentHTML('beforeend', `<li><a href="#">${i + 1}</a></li>`);
   }
   
   // Set first link to active
   linkContainer.firstElementChild.firstElementChild.classList.add('active');

   // Add click handler to links with event delegation on the link container
   linkContainer.addEventListener('click', (e) => {

      // if event occurred on anchor element
      if (e.target.tagName === 'A') {
         // Pagination links
         const links = document.querySelectorAll('.link-list a');

         // Link that was clicked
         const clickedLink = e.target;

         // Remove active class from all links
         [...links].forEach(link => link.className = '');

         // Set active class on current link
         clickedLink.classList.add('active');

         // Call showPage on the list parameter and use the clicked link's text as the page number to show
         showPage(list, clickedLink.innerHTML);
      }
   });
};

appendPageLinks(dataList);


// Search div template
const searchMarkup = `
   <label for="search" class="student-search">
      <input id="search" placeholder="Search for students...">
      <button>&#x1F50D;</button>
   </label>
`;

// Add search div to DOM
searchContainer.insertAdjacentHTML('beforeend', searchMarkup);

// Search input and button elements
const searchInput = document.querySelector('.student-search input');
const searchBtn = document.querySelector('.student-search button');

/**
 Search function - Display and paginate search matches
*/
const search = () => {

   // Student name and search value
   const studentName = (studentObj) => `${studentObj.name.first} ${studentObj.name.last}`.toLowerCase();
   const searchValue = searchInput.value.toLocaleLowerCase();

   // Array of matches
   const matches = dataList.filter(studentObj => studentName(studentObj).includes(searchValue));

   // Display search results or no results message
   if (matches.length) {
      showPage(matches, 1);
      appendPageLinks(matches);   
   } else {
      linkContainer.innerHTML = '';
      studentContainer.innerHTML = `<h2>Sorry, no results when searching for "${searchInput.value}".</h2>`;
   }
}

// Keyup and click listeners for search
searchInput.addEventListener('keyup', search);
searchBtn.addEventListener('click', search);



// const showPage = (list, page) => {
//    studentContainer.innerHTML = '';
//    for (let i = 0, j = list.length; i < j; i++) {
//       if (i >= (page * perPage) - perPage && i < page * perPage) {
//          const formattedDate = formatDate(list[i].registered.date);
//          const studentTemplate = `<li class="student-item cf"><div class="student-details"><img class="avatar" src="${list[i].picture.large}"><h3>${list[i].name.first} ${list[i].name.last}</h3><span class="email">${list[i].email}</span></div><div class="joined-details"><span class="date">Joined ${formattedDate}</span></div></li>`;
//          studentContainer.insertAdjacentHTML('beforeend', studentTemplate);
//       } 
//    }
// };

// const appendPageLinks = (list) => {
//    linkContainer.innerHTML = '';
//    for (let i = 0, j = Math.ceil(list.length / perPage); i < j; i++) {
//       linkContainer.insertAdjacentHTML('beforeend', `<li><a href="#">${i + 1}</a></li>`);
//    }
//    linkContainer.firstElementChild.firstElementChild.classList.add('active');
//    linkContainer.addEventListener('click', (e) => {
//       if (e.target.tagName === 'A') {
//          const links = document.querySelectorAll('.link-list a');
//          [...links].forEach(link => link.className = '');
//          e.target.classList.add('active');
//          showPage(list, e.target.innerHTML);
//       }
//    });
// };
