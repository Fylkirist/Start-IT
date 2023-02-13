function renderSettingsPage(){
    app.innerHTML = `
        <div id = topBanner>
            <button onclick = "changeView(0)" id="settingsPageButton" >Polls</button>
            <button onclick = "changeView(2)" id="resultsPageButton" >Results</button>
            <h1>Poll settings</h1>
        </div>
        <div id="settingsHeaderContainer">
            <input oninput="model.settingsPageQuestionInput=this.value" onchange="addQuestion()" id="newQuestionInput" type="text"></input>
            <button onclick="addQuestion()">Add poll question</button>
        </div>
        ${renderSettingsElements()}
    `
}

function renderSettingsElements(){
    let container = document.createElement("div")
    container.id= "settingsPollContainer"

    for(let i=0;i<model.pollQuestions.length;i++){
        let elem = document.createElement("div")
            elem.class="settingsPollElem"
            elem.innerHTML=`
                <h3>${model.pollQuestions[i].question}</h3>
                <button onclick="removeQuestion(${i})">Remove question</button>
                <ul>
                    ${model.pollQuestions[i].answers.map(item => {
                        return `<li>${item.answer}<button onclick="removeAnswer(${i},${model.pollQuestions[i].answers.indexOf(item)})")>X</button></li>`;
                    }).join('')}
                </ul>
                <div> Add answer to this question:
                <input value="${model.settingsPageAnswerInputList[i]}" 
                    type = "text" 
                    oninput="model.settingsPageAnswerInputList[${i}]=this.value" onchange = "addAnswer(${i})">
                </input>
                <button onclick = "addAnswer(${i})">Submit</button>
                <div>
            `
        container.appendChild(elem)
    }
    return container.outerHTML
}