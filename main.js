let count = {
    '2':0, '3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0
}

function rollDice() {
    let roll1 = Math.floor((Math.random() * 6) + 1);
    let roll2 = Math.floor((Math.random() * 6) + 1);
    let sum = roll1 + roll2
    return sum
}

function countRoll(numRolls) {
    let val = 0
    for(let i=0;i<numRolls;i++){
        val = rollDice()
        count[val]+=1
    }
}

function buildDOM() {
    let dest_graph = document.getElementById("graph")
    let dest_sum = document.getElementById("summary")

    for(i in count) {
        let bar = document.createElement("div")
        bar.className = "bar"
        bar.style.width = count[i]*3+"px"
        bar.style.height = "20px"
        bar.style.backgroundColor = "gray"
        bar.style.marginBottom = "1px"

        let bar_text = document.createTextNode(i)
        bar.appendChild(bar_text)
        dest_graph.appendChild(bar)
        
        let sum_text = document.createTextNode(i + ':' + count[i]+ ' ')
        dest_sum.appendChild(sum_text)
    }
}

countRoll(1000)
buildDOM()
