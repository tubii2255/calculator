function press(a){
    document.getElementById("answer_body").value+=a
}
function clear1(){
    document.getElementById("answer_body").value = ''
}
function answer(){
    var text = document.getElementById("answer_body").value
    var result = eval(text)
    document.getElementById("answer_body").value=result
    
}