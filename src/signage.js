// const columns = document.querySelectorAll(".column");

// function checkScroll() {
//   columns.forEach((column) => {
//     const columnTop = column.getBoundingClientRect().top;
//     const columnBottom = column.getBoundingClientRect().bottom;

//     const isPartiallyVisible =
//       columnTop < window.innerHeight && columnBottom >= 0;
//     if (isPartiallyVisible) {
//       column.classList.add("show");
//     }
//   });
// }

// // Initial check on page load
// checkScroll();

// // Check when the user scrolls the page
// window.addEventListener("scroll", checkScroll);

const dd = document.getElementsByClassName("column");
console.log(dd);
