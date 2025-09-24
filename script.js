function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  try {
    let expression = document.getElementById('display').value;

    // 替换表达式中的 Math 函数，以便它们能被 eval 正常识别
    expression = expression.replace(/Math\.(sin|cos|tan|log|sqrt|pow|PI|E)/g, (match) => {
      return match.replace('Math.', '');  // 去掉 Math. 前缀
    });

    // 使用 eval 来计算结果，eval 也会处理括号、运算符
    let result = eval(expression);

    // 防止出现 Infinity 或 NaN 的情况
    if (!isFinite(result)) {
      throw 'Math error';
    }

    // 显示结果
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
