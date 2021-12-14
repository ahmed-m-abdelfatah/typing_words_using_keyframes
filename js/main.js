const inputText = document.getElementById('input-text');
const animationDurationText = document.getElementById('animation-duration-text');
const percentage = document.getElementById('select-percentage');
const btn = document.getElementById('btn-convert');
const outputCss = document.getElementById('output-css');

const mainDurationTime = 5;
animationDurationText.value = `${mainDurationTime}`;
btn.addEventListener('click', getCssRules);
let outputCssRules;

function getCssRules() {
  const text = inputText.value;
  if (text) {
    inputText.style.cssText = '';
    let textCutIterable = 0;
    let textCutIndex = 0;
    let innerCssRule = '';

    let selectedPercentage = +percentage.value;
    for (let i = selectedPercentage; i <= 100; i += selectedPercentage) {
      innerCssRule += `
    ${i}% {
        content: ' ${text.slice(0, textCutIndex)}|';
    }
`;
      textCutIterable++;

      if (textCutIterable == text.length * 2) {
        textCutIterable = -1;
      } else {
        textCutIndex = textCutIterable <= text.length ? textCutIterable : text.length * 2 - textCutIterable;
      }

      //  console.log(`text.length ${text.length}`, `textCutIndex ${textCutIndex}`, `textCutIterable ${textCutIterable}`);
    }

    let animationDurationTextValue = Math.ceil(animationDurationText.value);

    // console.log(animationDurationTextValue);

    if (animationDurationTextValue <= 0) {
      animationDurationText.value = `${mainDurationTime}`;
    } else {
      animationDurationText.value = animationDurationTextValue > 0 ? animationDurationTextValue : mainDurationTime;
    }

    animationDurationTextValue = Math.ceil(animationDurationText.value);

    outputCssRules = outputCss.value = `
  .output-animation::after {
      content: '';
      animation: typing-text ${animationDurationTextValue}s ease-in-out 0s infinite alternate both;
    }

  @keyframes typing-text {
      ${innerCssRule}
    }

  `;

    addAnimationToPage();
  } else {
    inputText.style.cssText = 'border-color: red;box-shadow: 0 0 0 0.25rem rgb(255 0 0 / 25%);';
  }
}

function addAnimationToPage() {
  //   let styleTag = document.getElementsByTagName('style');
  //   console.log(styleTag);

  let headTag = document.head;
  let styleTag = document.createElement('style');

  headTag.appendChild(styleTag);

  styleTag.nodeType = 'text/css';

  styleTag.appendChild(
    document.createTextNode(
      outputCssRules +
        `
  .output-animation::after {
      background-color: #333;
      color: #fff;
      padding: 2px 5px;
      margin-left: 7px;
  }
  `,
    ),
  );
}
