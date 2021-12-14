const inputText = document.getElementById('input-text');
const animationDurationText = document.getElementById('animation-duration-text');
const percentage = document.getElementById('select-percentage');
const btn = document.getElementById('btn-convert');
const outputCss = document.getElementById('output-css');

btn.addEventListener('click', getCssRules);

function getCssRules() {
  const text = inputText.value;
  let textCutIterable = 0;
  let textCutIndex = 1;
  let innerCssRule = '';

  let selectedPercentage = +percentage.value;
  for (let i = selectedPercentage; i <= 100; i += selectedPercentage) {
    innerCssRule += `
    ${i}% {
        content: '${text.slice(0, textCutIndex)} |';
    }
`;
    textCutIterable++;
    if (textCutIterable == text.length * 2 - 1) {
      textCutIterable = 0;
    } else {
      textCutIndex = textCutIterable <= text.length ? textCutIterable : text.length * 2 - textCutIterable;
    }
  }

  outputCss.value = `
  .output-animation {
      animation: typing-text ${animationDurationText.value}s ease-in-out 0s infinite alternate both;
    }

  @keyframes typing-text {
      ${innerCssRule}
    }

  `;
}
