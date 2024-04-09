function press(a) {
    var answerBody = document.getElementById("answer_body");
    answerBody.value += a;
}

function clear1() {
    var answerBody = document.getElementById("answer_body");
    answerBody.value = '';
}

function answer() {
    var answerBody = document.getElementById("answer_body");
    var text = answerBody.value;
    var result = eval(text);
    answerBody.value = result;
}