
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
    console.log('create process')
}