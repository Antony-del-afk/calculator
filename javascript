function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  try {
    let expression = document.getElementById('display').value;
    // 处理 Math 函数
    expression = expression.replace(/Math\.(sin|cos|tan|log|sqrt|pow|PI|E)\(/g, (match) => match);
    let result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
