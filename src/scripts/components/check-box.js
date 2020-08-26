var checkboxs = document.querySelectorAll('.c-checkbox');
checkboxs.forEach(function (checkbox) {
  var input = checkbox.querySelector('.c-checkbox__input');
  input.addEventListener('click', function () {
    checkbox.classList.forEach(function (cls) {
      if (cls.indexOf("is-checked") !== -1) {
        checkbox.classList.remove('is-checked');
      } else {
        checkbox.classList.add('is-checked');
      }
    });
  });
});
