const inputText = document.getElementById('input-text');
const selectPercentage = document.getElementById('select-percentage');
const outputCss = document.getElementById('output-css');
const btn = document.getElementById('btn-convert');
const animationDurationText = document.getElementById('animation-duration-text');

animationDurationText.value = 3;
btn.addEventListener('click', convertTextToCss);

function convertTextToCss(e) {
  e.preventDefault();

  if (inputText.value) {
    outputCss.value = '';
    let innerText = '';
    let wordCutIndex = 1;

    for (let i = +selectPercentage.value; i <= 100; i += +selectPercentage.value) {
      innerText += `
        ${i}% {
            content: ' ${inputText.value.slice(0, wordCutIndex)} |';
        }
    `;

      if (wordCutIndex == inputText.value.length) {
        wordCutIndex = 1;
      } else {
        wordCutIndex++;
      }
    }

    if (+animationDurationText.value < 0) {
      animationDurationText.value = 5;
    } else if (isNaN(+animationDurationText.value)) {
      animationDurationText.value = 5;
    }

    outputCss.value = `
    .output-animation::after {
        content: '';
        animation: typing-text ${animationDurationText.value}s ease-in-out 0s infinite alternate both;
      }

    @keyframes typing-text {
        ${innerText}
      }

    `;

    showOutputAnimation();
  }
}

// __________________________________________________________________________________________

let outputAnimation = document.querySelector('.output-animation');

function showOutputAnimation() {
  outputAnimation.innerHTML = inputText.value + ' |';

  //   document.styleSheets[1].cssRules['0'].cssText = outputCss.value;

  //   console.log(document.styleSheets[1].cssRules);
  //   console.log(document.styleSheets[1].cssRules['0'].cssText);
}
