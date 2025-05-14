// Add event listener for the shop now button
document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.querySelector('.banner button');
    
    if (shopNowButton) {
      shopNowButton.addEventListener('click', function() {
        // This would typically navigate to a products page
        alert('Navigating to products page...');
        // window.location.href = 'products.html';
      });
    }
    
    // Add hover effects for the icons
    const icons = document.querySelectorAll('.icon a');
    
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', function() {
        this.querySelector('i').style.transform = 'scale(1.2)';
        this.querySelector('i').style.transition = 'transform 0.3s ease';
      });
      
      icon.addEventListener('mouseleave', function() {
        this.querySelector('i').style.transform = 'scale(1)';
      });
    });
  });