
let processes = [];
class Process{
    constructor(name, execution_time, arrival_time)
    {
        this.name = name;
        this.execution_time = execution_time;
        this.arrival_time = arrival_time;
    }
}
function createProcessButton(event)
{
    event.preventDefault();
    document.getElementById('modalButtonID').click();
}

function createProcess(event)
{
    event.preventDefault();
    let name = document.getElementById('name');
    let execution_time = document.getElementById('execution_time');
    let arrival_time = document.getElementById('arrival_time');
    document.getElementById('closeModalId').click();
    processes.push(new Process(name.value, execution_time.value, arrival_time.value))
    name.value = '';
    execution_time.value = '';
    arrival_time.value = '';
    displayList(event);
}

function displayList(event)
{
    event.preventDefault();
    let tableBlock = document.getElementById('tableBlockId');
    let table = document.getElementById('tableId');
    table.innerHTML = '';
    for(let i = 0; i < processes.length; i++)
    {
        let process = processes[i];
        let row = table.insertRow();
        let nameSell = row.insertCell();
        nameSell.innerHTML = process.name;
        let executionSell = row.insertCell();
        executionSell.innerHTML = process.execution_time;
        let arrivalSell = row.insertCell();
        arrivalSell.innerHTML = process.arrival_time;
    }
    tableBlock.style.display = '';
}