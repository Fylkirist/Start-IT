updateView()

function renderVotePage(){
    app.innerHTML=`
    <div id = topBanner>
        <button onclick = "changeView(1)" id="settingsPageButton" >Settings</button>
        <button onclick = "changeView(2)" id="resultsPageButton" >Results</button>
        <h1>Vote below</h1>
    </div>
    ${renderPollQuestions()}
        `
}

function renderPollQuestions(){
    let container = document.createElement("div")
    container.id="pollContainer"

    for(let i=0;i<model.pollQuestions.length;i++){
        let elem = document.createElement("div");
            elem.className = "pollElem";
            elem.innerHTML = `
                <h2>${model.pollQuestions[i].question}</h2>
                <div class="pollButtonContainer">
                ${model.pollQuestions[i].answers.map(item => {
                    return `<button class="pollButton" onclick="incrementPollAnswer(${i},${model.pollQuestions[i].answers.indexOf(item)})">${item.answer}</button>`;
                }).join('')}
                </div>
            `;
        container.appendChild(elem)
    }
    return container.outerHTML
}