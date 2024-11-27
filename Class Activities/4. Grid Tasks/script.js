function checkAnswer() {
    const options = document.getElementsByName('question1');
    let selectedAnswer;
    for (const option of options) {
        if (option.checked) {
            selectedAnswer = option.value;
            break;
        }
    }

    const result = document.getElementById('result');
    if (selectedAnswer === 'C') {
        result.textContent = 'Correct! grid-template-columns is the right answer.';
        result.style.color = '#4dccbd';
    } else {
        result.textContent = 'Incorrect! The correct answer is grid-template-columns.';
        result.style.color = '#e74c3c';
    }
}