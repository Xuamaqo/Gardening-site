document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');
  const body = document.body;

  toggleButton.addEventListener('click', function () {
    navbarLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  // Close the navbar when a link is clicked
  const navbarLinksList = document.querySelectorAll('.navbar-links a');
  navbarLinksList.forEach(function (link) {
    link.addEventListener('click', function () {
      navbarLinks.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script is running!");
  
  const currentYear = new Date().getFullYear();
  const copyrightYearElement = document.getElementById("copyright-year");

  if (copyrightYearElement) {
      console.log("Element found:", copyrightYearElement);
      copyrightYearElement.textContent = currentYear;
  } else {
      console.log("Element not found!");
  }
});