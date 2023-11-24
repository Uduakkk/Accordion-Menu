document.addEventListener("DOMContentLoaded", function() {
    const menuTags = document.querySelectorAll('.menu-tag');
    const menuContents = document.querySelectorAll('.all-contents');
    const statusSigns = document.querySelectorAll('.status-sign');
  
    menuTags.forEach((menuTag, index) => {
      menuTag.addEventListener('click', function() {
        menuContents[index].classList.toggle('expanding');
        statusSigns[index].textContent = menuContents[index].classList.contains('expanding') ? 'x' : '+';
      });
    });
  });
  