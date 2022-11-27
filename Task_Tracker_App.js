// document.write("<h4>Task Tracker Project</h4>");

// Adding tasks to list
let Task_List = [];

function addTask() {
    // Store the Mentioned Task
    let Task = document.getElementById("new-task").value;

    if (Task.length > 0 && Task_List.includes(Task) == false) {
        Task_List.push(Task);

        //Creating Grid Elements <div class = "row">
        let Task_Row = document.createElement("div");
        Task_Row.classList.add('row', 'd-flex', 'justify-content-center', 'mt-2', 'py-1');

        //Creating Column Inside row <div class = "col">
        let Task_Col = document.createElement("div");
        let Delete_Button_Col = document.createElement("div");
        Task_Col.classList.add('col-5');
        Delete_Button_Col.classList.add('col-5');

        // Creating Elements to display Tasks
        let Task_Bold = document.createElement("h6");
        let Delete_Button = document.createElement("button");
        Delete_Button.classList.add('btn', 'btn-danger', 'btn-sm');

        // Injecting Text inside New Elements
        let Task_Name = document.createTextNode(Task);
        let Delete_Button_Name = document.createTextNode("It's Done!");


        //Delete Task Button
        Delete_Button.setAttribute('onclick', 'deleteTask()');
        Delete_Button.setAttribute('id', Task);
        Task_Row.setAttribute('id', Task);

        //Appending Text inside Element
        Task_Bold.appendChild(Task_Name);
        Delete_Button.appendChild(Delete_Button_Name);

        Task_Col.appendChild(Task_Bold);
        Delete_Button_Col.appendChild(Delete_Button);

        Task_Row.appendChild(Task_Col);
        Task_Row.appendChild(Delete_Button_Col);

        document.getElementById("tasks").appendChild(Task_Row);
        document.getElementById('new-task').value = '';

        //Success Alert
        swal({
            title: "Task added successfully!",
            text: `Hurry! Complete the Task : ${Task}`,
            icon: "success",
        });
    }

    else {
        if (Task.length == 0) {
            //Task is empty Alert
            swal({
                title: "NO TASK ADDED!",
                text: `Please enter a Task`,
                icon: "error",
            });
        }

        else if(Task_List.includes(Task) == true)
        {
            //Task already added
            swal({
                title: `${Task} : Task Already Added!`,
                text: `Complete it first`,
                icon: "warning",
            });

            document.getElementById('new-task').value = '';
        }
    }
}


//Deleting tasks from list
function deleteTask() {
    // Grabbing the id of the deleted element
    let completedTask = this.event.target.id;
    document.getElementById(completedTask).remove();

    //Deleting element from list
    let i = Task_List.indexOf(completeTask);
    Task_List.splice(i, 1);

    //Deleted Alert
    swal({
        title: "Congratulations!",
        text: `You completed the Task.`,
        icon: "success",
    });

    completeTask(completedTask);
}


// Adding tasks to completed list
function completeTask(deletedTask) {
    //Creating Grid Elements
    let Completed_Task_Row = document.createElement("div");
    Completed_Task_Row.classList.add('row', 'd-flex', 'justify-content-center', 'mt-2', 'py-1');

    // Creating Elements for Task UI
    let complete_Task_UI = document.createElement("h6");
    let del_tag = document.createElement("del");
    let T = document.createTextNode(deletedTask);

    del_tag.appendChild(T);
    complete_Task_UI.appendChild(del_tag);
    Completed_Task_Row.append(complete_Task_UI);

    document.getElementById("completeTask").appendChild(Completed_Task_Row);
}


//Triggering by Enter Key
let Task_Input = document.getElementById("new-task");
let Add_Task = document.getElementById("add-task");

Task_Input.addEventListener("keyup", function (event) 
{
    if (event.key == 'Enter') 
    {
        Add_Task.click();
    }
});

// document.write("<br>" + "<br>");
