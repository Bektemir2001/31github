
let processes = [];
class Process{
    constructor(name, execution_time, arrival_time)
    {
        this.name = name;
        this.execution_time = execution_time;
        this.arrival_time = arrival_time;
        this.waitingTime = 0;
        this.turnaroundTime = 0;
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

function generateScheduleSPN()
{
    processes.sort((a, b) => a.execution_time - b.execution_time);
    let currentTime = 0;

    for (const process of processes) {
        process.waitingTime = Math.max(0, currentTime - process.arrival_time);
        process.turnaroundTime = process.waitingTime + process.execution_time;
        currentTime += process.execution_time;
    }

    displayList(event);
}

function statistic(event)
{
    event.preventDefault();
    const waitingTimes = processes.map(process => process.waitingTime);
    const turnaroundTimes = processes.map(process => process.turnaroundTime);

    const averageWaitingTime = waitingTimes.reduce((acc, val) => acc + val, 0) / waitingTimes.length;
    const meanTurnaroundTime = turnaroundTimes.reduce((acc, val) => acc + val, 0) / turnaroundTimes.length;
    displayStatistic(averageWaitingTime, meanTurnaroundTime)
}

function exit(event)
{
    event.preventDefault();
    location.reload();
}