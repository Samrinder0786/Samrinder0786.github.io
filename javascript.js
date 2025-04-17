// Star Rating Selection
const stars = document.querySelectorAll('.star-rating i');
const ratingInput = document.getElementById('rating');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-rating');
    ratingInput.value = rating;
    
    stars.forEach((s, index) => {
      if (index < rating) {
        s.classList.add('fas');
        s.classList.remove('far');
      } else {
        s.classList.add('far');
        s.classList.remove('fas');
      }
    });
  });
});

// Character Counter for Review Text
const reviewTextarea = document.getElementById('review');
const charCount = document.getElementById('charCount');

reviewTextarea.addEventListener('input', () => {
  charCount.textContent = reviewTextarea.value.length;
});

// Form Submission & Popup
const reviewForm = document.getElementById('reviewForm');
const confirmationPopup = document.getElementById('confirmationPopup');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmationPopup.style.display = 'block';
  reviewForm.reset();
  
  // Reset stars
  stars.forEach(star => {
    star.classList.add('far');
    star.classList.remove('fas');
  });
  ratingInput.value = '0';
  charCount.textContent = '0';
});

function closePopup() {
  confirmationPopup.style.display = 'none';
}