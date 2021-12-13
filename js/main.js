const inputText = document.getElementById('input-text');
const animationDurationText = document.getElementById('animation-duration-text');
const percentage = document.getElementById('select-percentage');
const btn = document.getElementById('btn-convert');
const outputCss = document.getElementById('output-css');

btn.addEventListener('click', function () {
  cutTextRightSidePyramid();
});

function cutTextRightSidePyramid() {
  let text = inputText.value;

  for (let i = 1; i <= text.length * 2 - 1; i++) {
    const cut = i <= text.length ? i : text.length * 2 - i;
    console.log(text.slice(0, cut));
  }
}
