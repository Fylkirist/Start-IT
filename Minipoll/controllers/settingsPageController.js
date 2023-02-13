function addAnswer(question){
    if(model.settingsPageAnswerInputList[question]!=""){
        model.pollQuestions[question].answers.push({answer:model.settingsPageAnswerInputList[question],votes:0})
        model.settingsPageAnswerInputList[question]=""
        updateView()
    }
}

function addQuestion(){
    if(model.settingsPageQuestionInput!=""){
        model.pollQuestions.push({question:model.settingsPageQuestionInput,answers:[{answer:"Great",votes:0},{answer:"Fair",votes:0},{answer:"Terrible",votes:0}]})
        model.settingsPageQuestionInput=""
        model.settingsPageAnswerInputList.push("")
        model.resultsShown.push(false)
        updateView()
    }
}

function removeQuestion(question){
    model.pollQuestions.splice(question,1)
    model.settingsPageAnswerInputList.splice(question,1)
    model.resultsShown.splice(question,1)
    updateView()
}

function removeAnswer(question,answer){
    model.pollQuestions[question].answers.splice(answer,1)
    updateView()
}