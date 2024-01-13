(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict


document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("departmentTable");
  const emptyDataDiv = document.querySelector(".empty-data");

  // Check if there are no rows in the table body
  if (table.tBodies[0].rows.length === 0) {
      emptyDataDiv.style.display = "block";
  }
});



function filterTable(status, event) {
  const rows = document.querySelectorAll('.data-row');
  const noResultsMessage = document.getElementById('no-results');
  let found = false;

  rows.forEach(row => {
      const cell = row.querySelector('.status');
      if (cell) {
          if (status === 'All' || cell.textContent === status) {
              row.style.display = '';
              found = true;
          } else {
              row.style.display = 'none';
          }
      }
  });

  if (found) {
      noResultsMessage.style.display = 'none';
  } else {
      noResultsMessage.style.display = 'block';
  }

  // Update the active tab
  const buttons = document.querySelectorAll('.filter-tab button');
  buttons.forEach((button) => button.classList.remove('active'));
  event.target.classList.add('active');
}