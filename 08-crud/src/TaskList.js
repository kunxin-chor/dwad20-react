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
        'newTaskName': "",
        'editedTaskName':"",
        'taskBeingEdited': null  // remember which task is being edited right now
                                // if null, means no task being edited
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

    // the task parameter is the task that is being edited
    beginEditTask = (task) => {
        this.setState({
            'taskBeingEdited': task,
            'editedTaskName': task.description
        })
    }

    processEditTask = () => {
        // clone the task that is being editd
        // const clonedTask = { ...this.state.taskBeingEdited};
        // clonedTask.description = this.state.editedTaskName;

        const clonedTask = {
            ...this.state.taskBeingEdited,
            description: this.state.editedTaskName
        }

        // when you spread an object, all the key/values pairs of objects extracted out
        // and seperated by a coma
        // =>
        // {
        //    id: 1
        //    description: "Walk the dog",
        //    done: false,
        //    description: this.state.editedTaskName
        // }

        const indexToReplace = this.state.tasks.findIndex( eachTask => eachTask.id === clonedTask.id);
        const left = this.state.tasks.slice(0, indexToReplace);
        const right = this.state.tasks.slice(indexToReplace+1);
        const modified = [...left, clonedTask, ...right];

        this.setState({
            'tasks': modified,
            'taskBeingEdited': null
        })

    }

    cancelEdit = ()=>{
        this.setState({
            'taskBeingEdited': null
        })
    }

    deleteTask = (task) => {
        // find the index of the task that we want to delete
        let indexToDelete = this.state.tasks.findIndex(t => t._id == task._id );

        // the "traditional" method
        // let cloned = this.state.tasks.slice();
        // cloned.splice(indexToDelete, 1); // start deleting at indexToDelete and delete only 1
        // this.setState({
        //     'tasks': cloned
        // })

        // the functional programming method
        // find the left side of the array -- ending right before what we want to delete
        const left = this.state.tasks.slice(0, indexToDelete);
        // find the right side of the array -- starting at the index one AFTER what we want to delete
        const right = this.state.tasks.slice(indexToDelete + 1)
        const modified = [...left, ...right];
        this.setState({
            'tasks': modified
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
                    // eachTask is the task object that is going to be displayed
                    if (this.state.taskBeingEdited && 
                        eachTask.id === this.state.taskBeingEdited.id ) {
                        //this current task that we are rendering is being edited
                        //so display a form instead
                        return (
                            <li key={eachTask.id}>
                                <input type="text"
                                       name="editedTaskName"
                                       value={this.state.editedTaskName}
                                       onChange={this.updateFormField}
                                />
                                <button onClick={this.processEditTask}>Update</button>
                                <button onClick={this.cancelEdit}>Cancel</button>
                            </li>
                        )

                    } else {
                        return (
                            <li key={eachTask.id}>
                                {eachTask.description}
                                <input type="checkbox" checked={eachTask.done} onChange={()=>{
                                    this.checkTask(eachTask)
                                }}/>
                                <button onClick={()=>{
                                    this.beginEditTask(eachTask)
                                }}>Edit</button>
                                <button onClick={()=>{
                                    this.deleteTask(eachTask)
                                }}>Delete</button>
                            </li>
                        )
                    }

                  
                })
            }
            </ul>
        </React.Fragment>
            )
    }
}