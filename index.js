//State
const dashboardState = {
    homework: [],
    selectedSubject: "all",
    theme: "dark"
};

//Rendering Functions

function renderHomework() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    dashboardState.homework.forEach(function(homework) {
        const li = document.createElement("li");

        li.textContent = "${homework.assignment} - ${homework.subject} - Due: ${homework.dueDate}";

        const completeButton = document.createElement("button");
        completeButton.textContent = homework.completed ? "Completed" : "Mark Complete";
        completeButton.className = "complete-button";

        completeButton.addEventListener("click", function() {
            toggleHomework(homework.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function() {
            deleteHomework(homework.id);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function renderStats() {
    const totalAssignments = dashboardState.homework.length;
    const completedAssignments = dashboardState.homework.filter(function(homework) {
        return homework.completed;
    }).length;

    document.getElementById("total-assignments").textContent = totalAssignments;
    document.getElementById("completed-assignments").textContent = completedAssignments;
}

function renderTheme() {
    document.body.className = dashboardState.theme;
}

//State Changing Functions

function  addHomework(assignment, subject, dueDate) {
    if (!assignment || !subject || !dueDate) {
        alert("Please fill in all fields.");
        return;
    }
    
    const newHomework = {
        id: Date.now(),
        assignment: assignment,
        subject: subject,
        dueDate: dueDate,
        completed: false

    };

    dashboardState.homework.push(newHomework);

    renderHomework();
    renderStats();
}



function deleteHomework(id) {
     dashboardState.homework = dashboardState.homework.filter(function(homework) {
        return homework.id !== id;
     });
    renderHomework();
    renderStats();
}

function toggleHomework(id) {
    dashboardState.homework.forEach(function(homework) {
        if (homework.id === id) {
            homework.completed = !homework.completed;
        }
    });
    renderHomework();
    renderStats();
}

function toggleTheme() {
    if (dashboardState.theme === "dark") {
        dashboardState.theme = "light";
    } else {
        dashboardState.theme = "dark";
    }
    renderTheme();
}

//Event Listeners

const homeworkForm = document.querySelector("#homework-form");
homeworkForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const assignment = document.getElementById("assignment").value;
    const subject = document.getElementById("subject").value;
    const dueDate = document.getElementById("due-date").value;

    addHomework(assignment, subject, dueDate);
});


const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", function() {
    toggleTheme();
});