function showPopup(imageSrc) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }