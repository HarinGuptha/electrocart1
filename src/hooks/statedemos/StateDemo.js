import React, { useState } from 'react';

function StateDemo() {
    let [counter, setCounter] = useState(10);
    let [name, setName] = useState('Rajesh');
    let [employee, setEmployee] = useState({ eid: 100, ename: 'Harin',city:'Hyd'});
    let [skills,setskills]=useState(['js','css'])

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function updateName() {
        setName("Harin");
    }

    function updateEmployeeName() {
        setEmployee({...employee,  ename: 'Venkat',city:'Benguluru'});
    }
    function addSkill(){
        setskills([...skills,'react'])
    }
    function deleteskill(){
        let copyskill=[...skills]
        copyskill.pop()
        setskills(copyskill)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <h1>Name: {name}</h1>
            <button className='btn btn-success' onClick={incrementCounter}>Increment Counter</button>
            <button className='btn btn-primary' onClick={updateName}>Change Name</button>
            <h1>Employee Id :{employee.eid}</h1>
            <h1>Employee Name: {employee.ename}</h1>
            <h1>{employee.city  }</h1>
            <button className='btn btn-warning' onClick={updateEmployeeName}>Change Employee Name</button>
            {
                skills.map((skill,ind)=><h1 key={ind}>{skill}</h1>)
            }
            <button className='btn btn-success' onClick={addSkill}>Add</button>
            <button className='btn btn-success' onClick={deleteskill}>Delete</button>
        </div>
    );
}

export default StateDemo;

