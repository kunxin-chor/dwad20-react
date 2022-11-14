import React from 'react'

export default class TaskList extends React.Component {
   
    state = {
        'tasks':[
            {
                "id": 1,
                "description":"Walk the dog",
                "done": false
            },
            {
                "id": 2,
                "description":"Water the plants",
                "done": false
            },
            {
                "id": 3,
                "description":"Pay the bills",
                "done": false
            }
        ],
        'newTaskName': ""
    }

    updateFormField = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addTask = () => {
        const newTask = {
            id: Math.floor(Math.random() * 100000 + 1),
            description: this.state.newTaskName,
            done: false
        }
        // to add the new task to the back of the this.state.tasks array
        // we must do a 'non-mutating' change

        // OLD FASHIONED METHOD
        // let cloned = this.state.tasks.slice();

        // cloned.push(newTask);

        // this.setState({
        //     tasks: cloned
        // })

        // FUNCTIONAL PROGRAMMING
        const modified = [ ...this.state.tasks, newTask];
        this.setState({
            'tasks': modified
        })
       

    }

    // the task parameter is the task that we want to change
    checkTask = (task) => {
        
        // if we want to modify an object, we have to see through the steps

        // 1. clone the object
        const clonedTask = {...task};  // use the spread operator to clone the original objectg

        // 2. make the change (invert the done boolean)
        clonedTask.done = !clonedTask.done;

        // modify the tasks array
        const indexToReplace = this.state.tasks.findIndex( eachTask => {
            if (eachTask.id === task.id) {
                return true;
            } else {
                return false;
            }
        } )

        // const left = this.state.tasks.slice(0, indexToReplace);
        // const right = this.state.tasks.slice(indexToReplace+1);
        // const modified =[...left, clonedTask, ...right ];

        const modified = [ ...this.state.tasks.slice(0, indexToReplace),
                            clonedTask, 
                            ...this.state.tasks.slice(indexToReplace+1)]

        this.setState({
            tasks: modified
        })
        
    }

    render() {
        return (<React.Fragment>
            <h1>Todo List</h1>

            <div>
                <label>Task Name:</label>
                <input type="text" onChange={this.updateFormField} name="newTaskName" value={this.state.newTaskName}/>
                <button onClick={this.addTask}>Add</button>
            </div>
            
            <ul>
            {
                this.state.tasks.map((eachTask)=>{
                    return (
                        <li key={eachTask.id}>
                            {eachTask.description}
                            <input type="checkbox" checked={eachTask.done} onChange={()=>{
                                this.checkTask(eachTask)
                            }}/>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    )
                })
            }
            </ul>
        </React.Fragment>
            )
    }
}