function renderResultsPage(){
    app.innerHTML = `
        <div id = topBanner>
            <button onclick = "changeView(0)" id="pollsPageButton" >Polls</button>
            <button onclick = "changeView(1)" id="settingsPageButton" >Settings</button>
            <h1>Results</h1>
        </div>
        ${renderResults()}
    `
}

function renderResults() {
    let container = document.createElement("div");
    container.id = "resultElementContainer";
  
    for (let i = 0; i < model.pollQuestions.length; i++) {
      let containerElem = document.createElement("div");
      containerElem.className = "resultContainerElem";
  
      let resultElemHeader = document.createElement("h3");
      resultElemHeader.className = "resultElemHeader";
      resultElemHeader.textContent = model.pollQuestions[i].question;
  
      let graphContainer = document.createElement("div");
      graphContainer.className = "resultGraphContainer";
  
      let sum = 0;
      model.pollQuestions[i].answers.forEach(item => {
        sum += item.votes;
      });
  
      model.pollQuestions[i].answers.forEach(item => {
        let answerHeader = document.createElement("div");
        answerHeader.textContent = item.answer;
  
        let graphBar = document.createElement("div");
        graphBar.className = "resultsGraphBar";
        graphBar.style.height = `20px`;
        graphBar.style.width = `${(item.votes / sum) * 300}px`;
  
        let answerVoteLabel = document.createElement("div");
        answerVoteLabel.textContent = item.votes;
  
        graphContainer.appendChild(answerHeader);
        graphContainer.appendChild(graphBar);
        graphContainer.appendChild(answerVoteLabel);
      });
  
      containerElem.appendChild(resultElemHeader);
      containerElem.appendChild(graphContainer);
      container.appendChild(containerElem);
    }
  
    return container.outerHTML;
  }