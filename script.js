function selectPet(name, age, species, images) {
  // Display the gallery modal with images
  showGalleryModal(name, age, species, images);
}

function showGalleryModal(name, age, species, images) {
  // Create modal dynamically
  const modal = document.createElement('div');
  modal.className = 'gallery-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>${name}</h2>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Species:</strong> ${species}</p>
      <div class="image-gallery">
        ${images.map(img => `<img src="${img}" alt="${name}" />`).join('')}
      </div>
    </div>
  `;

  // Append modal to body
  document.body.appendChild(modal);

  // Close button functionality
  modal.querySelector('.close-btn').addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Close modal when clicking outside the content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
    function adoptPet(petName) {
      // You can perform any actions here before redirecting, such as logging the adoption
      alert("Thank you for your interest in adopting " + petName + "! Redirecting you to the Selected Pets page.");
      
      // Redirect to the Selected Pets page
      window.location.href = "http://127.0.0.1:5500/selectedpets.html";
  }
  });
}
