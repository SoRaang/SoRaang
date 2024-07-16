const btnAlert = document.getElementById('btnButton');
const imgImage = document.getElementById('imgImage');

btnAlert.addEventListener('click', () => alert(imgImage.dataset.desc));