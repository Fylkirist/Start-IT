const app = document.getElementById("app")

var wordList = ["____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____","____"];

const wordSelectionMatrix = [
    ["stygge","flotte","idiotiske"],
    ["stygt","fint","idiotisk"],
    ["sorte","lilla","kalde"],
    ["høye","korte","brede"],
    ["tykke","tynne","lange"],
    ["gammelt","nytt","søtt"],
    ["store","små","runde"],
    ["varm","kald","regnfull"],
    ["høye","lave","bråkete"],
    ["tapre","feige","nysgjerrige"],
    ["glatte","rue","skummle"],
    ["store","lille","dumme"],
    ["gamle","nye","skjøre"],
    ["raklete","nydelige","forferdelige"],
    ["irriterende","søte","bråkete"],
    ["lite","høyt","kjedelig"],
    ["fantastiske","stygge","ekle"],
    ["redde","modige","sjenerte"],
    ["sinte","glade","tåpelige"],
    ["glatt","ru","skummel"],
    ["dype","grunne","rennende"],
    ["slimete","saltet","tørr"],
    ["umoralske","dårlige","overraskende"]
];

function updateText()
{
    app.innerHTML=`<h1>Det <span onclick="dropDown(this,0)">${wordList[0]}</span><div class="dropDownList list" id="1"></div> trollet</h1><p>Det var en gang et <span onclick="dropDown(this,1)">${wordList[1]}</span><div class="dropDownList list" id="2"></div> troll som bodde langt ute i 
    den <span onclick="dropDown(this,2)">${wordList[2]}</span><div class="dropDownList list" id="3"></div> skogen. Trollet hadde tre <span onclick="dropDown(this,3)">${wordList[3]}</span><div class="dropDownList list" id="4"></div> hoder
    og fire <span onclick="dropDown(this,4)">${wordList[4]}</span><div class="dropDownList list" id="5"></div> bein. Det vokste et <span onclick="dropDown(this,5)">${wordList[5]}</span><div class="dropDownList list" id="6"></div> tre på den 
    <span onclick="dropDown(this,6)">${wordList[6]}</span><div class="dropDownList list" id="7"></div> nesa til trollet.En <span onclick="dropDown(this,7)">${wordList[7]}</span><div class="dropDownList list" id="8"></div> dag hørte det <span onclick="dropDown(this,8)">${wordList[8]}</span><div class="dropDownList list" id="9"></div> trollet to <span onclick="dropDown(this,9)">${wordList[9]}</span><div class="dropDownList list" id="10"></div> 
    barn som gikk på den <span onclick="dropDown(this,10)">${wordList[10]}</span><div class="dropDownList list" id="11"></div> stien. Det <span onclick="dropDown(this,11)">${wordList[11]}</span><div class="dropDownList list" id="12"></div> 
    trollet bestemte seg for å skremme barna. Derfor gjemte 
    trollet seg under den <span onclick="dropDown(this,12)">${wordList[12]}</span><div class="dropDownList list" id="13"></div> broa. 
    Da barna skulle over den<span onclick="dropDown(this,13)"> ${wordList[13]}</span><div class="dropDownList list" id="14"></div> broa, brølte det 
    <span onclick="dropDown(this,14)">${wordList[14]}</span><div class="dropDownList list" id="15"></div> trollet så <span onclick="dropDown(this,15)">${wordList[15]}</span><div class="dropDownList list" id="16"></div> det kunne. ”Hvem er det som 
    tramper på min <span onclick="dropDown(this,16)">${wordList[16]}</span><div class="dropDownList list" id="17"></div> bro?”. De <span onclick="dropDown(this,17)">${wordList[17]}</span><div class="dropDownList list" id="18"></div> barna skrek 
    og la på sprang det forteste de kunne. ”Nå kommer jeg og 
    tar dere!”, ropte det <span onclick="dropDown(this,18)">${wordList[18]}</span><div class="dropDownList list" id="19"></div> trollet.
    Men plutselig skled trollet på en <span onclick="dropDown(this,19)">${wordList[19]}</span><div class="dropDownList list" id="20"></div> stein. Trollet falt 
    rett ned i den <span onclick="dropDown(this,20)">${wordList[20]}</span><div class="dropDownList list" id="21"></div> fossen og ble slukt av en 
    <span onclick="dropDown(this,21)">${wordList[21]}</span><div class="dropDownList list" id="22"></div> fisk. Snipp snapp snute, så er dette <span onclick="dropDown(this,22)">${wordList[22]}</span><div class="dropDownList list" id="23"></div> 
    eventyret ute.</p>`
}

function changeWord(word,pos){
    wordList[pos]=word.innerHTML
    word.parentElement.classList.toggle("dropDownList")
    updateText();
}

function dropDown(elem,space){
    console.log(space)
    let curr=document.getElementById(space+1)
    curr.classList.toggle("dropDownList")
    curr.innerHTML=""
    let rect = elem.getBoundingClientRect()
    curr.style.top = `${rect.top}px`
    curr.style.left = `${rect.left}px`
    for(i=0;i<wordSelectionMatrix[space].length;i++)[
        curr.innerHTML+=`<div class="listBox" onclick="changeWord(this,${space})">${wordSelectionMatrix[space][i]}</div>`
    ]
    
}

updateText();