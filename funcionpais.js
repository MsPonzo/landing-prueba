function redirect(country) {
    if (country === 'argentina') {
      window.location.href = 'argentina.html';
    } else if (country === 'chile') {
      window.location.href = 'chile.html';
    } else if (country === 'colombia') {
      window.location.href = 'colombia.html';
    }
  }
  
  function toggleSize() {
    var message = document.querySelector('.message');
    message.classList.toggle('larger');
  }
  