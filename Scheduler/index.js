
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
    console.log('gfjngdlkg')
    document.getElementById('modalButtonID').click();
}

function createProcess(event)
{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let execution_time = document.getElementById('execution_time').value;
    let arrival_time = document.getElementById('arrival_time').value;
    document.getElementById('closeModalId').click();
    processes.push(new Process(name, execution_time, arrival_time))
}

function displayList()
{
    
}