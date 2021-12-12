const inputText = document.getElementById('input-text');
const selectPercentage = document.getElementById('select-percentage');
const outputCss = document.getElementById('output-css');
const btn = document.getElementById('btn-convert');

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
            content: '${inputText.value.slice(0, wordCutIndex)} |';
        }
    `;

      if (wordCutIndex == inputText.value.length) {
        wordCutIndex = 1;
      } else {
        wordCutIndex++;
      }
    }

    outputCss.value = `
    @keyframes typing-text {
        ${innerText}
      }

    `;
  }
}
