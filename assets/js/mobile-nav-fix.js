document.addEventListener('DOMContentLoaded', function () {
  var languageSwitch = document.querySelector('#language-switch');

  if (languageSwitch) {
    languageSwitch.addEventListener('click', function (event) {
      // Prevent the default behavior of the anchor tag
      event.preventDefault();
      // Stop the event from bubbling up to the navbarCollapse
      event.stopPropagation();

      var dropdownMenu = languageSwitch.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        // Toggle the 'show' class to open/close the dropdown
        dropdownMenu.classList.toggle('show');
        // Toggle aria-expanded attribute for accessibility
        var dropdownToggle = languageSwitch.querySelector('.dropdown-toggle');
        if (dropdownToggle) {
          var isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
          dropdownToggle.setAttribute('aria-expanded', !isExpanded);
        }
      }
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function (event) {
      if (!languageSwitch.contains(event.target)) {
        var dropdownMenu = languageSwitch.querySelector('.dropdown-menu');
        if (dropdownMenu && dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
          var dropdownToggle = languageSwitch.querySelector('.dropdown-toggle');
          if (dropdownToggle) {
            dropdownToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  }
});
