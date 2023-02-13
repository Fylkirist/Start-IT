function incrementPollAnswer(question,answer){
    model.pollQuestions[question].answers[answer].votes++
}

function changeView(view){
    model.currentPage=view
    updateView()
}
