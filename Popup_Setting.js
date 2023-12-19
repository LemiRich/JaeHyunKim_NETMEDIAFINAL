const triggerDivs = document.querySelectorAll('.div_float');
const popupDivs = document.querySelectorAll('.popupDiv');

triggerDivs.forEach(triggerDiv => {
  triggerDiv.addEventListener('click', function() {
    const popupId = this.dataset.popup; // Get the ID of the popup from data-popup attribute
    const popupDiv = document.getElementById(popupId);

    // Hide all popups
    popupDivs.forEach(popup => {
      popup.style.display = 'none';
    });

    // Show the selected popup
    popupDiv.style.display = 'block';
  });
});

// Close the popup when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.div_float') && !event.target.closest('.popupDiv')) {
    popupDivs.forEach(popup => {
      popup.style.display = 'none';
    });
  }
});
