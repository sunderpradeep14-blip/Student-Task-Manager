const starterTasks = [{"id": 1, "title": "Complete DBMS Assignment", "subject": "DBMS", "description": "Finish the ER diagram and normalization questions.", "dueDate": "2026-09-18", "priority": "High", "status": "Pending"}, {"id": 2, "title": "Practice Java Loops", "subject": "Java", "description": "Practice for-loops, while-loops, and nested loops.", "dueDate": "2026-09-18", "priority": "Medium", "status": "Pending"}, {"id": 3, "title": "Prepare DSA Notes", "subject": "DSA", "description": "Write notes on linked lists and stacks.", "dueDate": "2026-09-19", "priority": "High", "status": "Pending"}, {"id": 4, "title": "Submit Mathematics Record", "subject": "Mathematics", "description": "Complete the pending discrete mathematics record work.", "dueDate": "2026-09-19", "priority": "Medium", "status": "Pending"}, {"id": 5, "title": "Create HTML Portfolio", "subject": "Web Development", "description": "Build a simple personal portfolio page.", "dueDate": "2026-09-20", "priority": "Medium", "status": "Pending"}, {"id": 6, "title": "Revise Python Basics", "subject": "Python", "description": "Revise variables, data types, conditions, and loops.", "dueDate": "2026-09-20", "priority": "Low", "status": "Completed"}, {"id": 7, "title": "SQL Query Practice", "subject": "SQL", "description": "Practice SELECT, WHERE, GROUP BY, and ORDER BY queries.", "dueDate": "2026-09-21", "priority": "Medium", "status": "Pending"}, {"id": 8, "title": "Finish Tableau Dashboard", "subject": "Data Science", "description": "Complete charts and insights for the supermarket dataset.", "dueDate": "2026-09-21", "priority": "High", "status": "Pending"}, {"id": 9, "title": "Read AI Unit 1", "subject": "Artificial Intelligence", "description": "Study the first unit and prepare short notes.", "dueDate": "2026-09-22", "priority": "Medium", "status": "Pending"}, {"id": 10, "title": "C Programming Revision", "subject": "C Programming", "description": "Revise arrays, pointers, and functions.", "dueDate": "2026-09-22", "priority": "Low", "status": "Completed"}, {"id": 11, "title": "Prepare Seminar Slides", "subject": "Communication", "description": "Create slides for the upcoming classroom seminar.", "dueDate": "2026-09-23", "priority": "High", "status": "Pending"}, {"id": 12, "title": "Practice Java OOP", "subject": "Java", "description": "Practice classes, objects, inheritance, and constructors.", "dueDate": "2026-09-23", "priority": "Medium", "status": "Pending"}, {"id": 13, "title": "Complete Mini Project Plan", "subject": "Project", "description": "Finalize modules and requirements for the mini project.", "dueDate": "2026-09-24", "priority": "High", "status": "Pending"}, {"id": 14, "title": "Draw Hospital ER Diagram", "subject": "DBMS", "description": "Create and label entities and relationships.", "dueDate": "2026-09-24", "priority": "Medium", "status": "Completed"}, {"id": 15, "title": "Study Normalization", "subject": "DBMS", "description": "Revise 1NF, 2NF, and 3NF with examples.", "dueDate": "2026-09-25", "priority": "Medium", "status": "Pending"}, {"id": 16, "title": "Practice Linked List", "subject": "DSA", "description": "Implement insertion and deletion in a linked list.", "dueDate": "2026-09-25", "priority": "High", "status": "Pending"}, {"id": 17, "title": "Build Calculator UI", "subject": "Web Development", "description": "Create a responsive calculator using HTML, CSS, and JavaScript.", "dueDate": "2026-09-26", "priority": "Medium", "status": "Pending"}, {"id": 18, "title": "Learn Java Collections", "subject": "Java", "description": "Study ArrayList, LinkedList, HashSet, and HashMap.", "dueDate": "2026-09-26", "priority": "Low", "status": "Pending"}, {"id": 19, "title": "Python Data Analysis", "subject": "Python", "description": "Practice basic data analysis using pandas.", "dueDate": "2026-09-27", "priority": "Medium", "status": "Pending"}, {"id": 20, "title": "Prepare Internal Test", "subject": "General", "description": "Revise important questions for the internal assessment.", "dueDate": "2026-09-27", "priority": "High", "status": "Pending"}, {"id": 21, "title": "Complete SQL Assignment", "subject": "SQL", "description": "Write and test the assigned SQL subqueries.", "dueDate": "2026-09-28", "priority": "High", "status": "Completed"}, {"id": 22, "title": "Practice Git Commands", "subject": "Git", "description": "Learn init, add, commit, branch, and push commands.", "dueDate": "2026-09-28", "priority": "Low", "status": "Pending"}, {"id": 23, "title": "Upload Project to GitHub", "subject": "GitHub", "description": "Create the repository and upload the task manager.", "dueDate": "2026-09-29", "priority": "High", "status": "Pending"}, {"id": 24, "title": "Write Project README", "subject": "GitHub", "description": "Add project description, features, and setup instructions.", "dueDate": "2026-09-29", "priority": "Medium", "status": "Completed"}, {"id": 25, "title": "Capture Project Screenshots", "subject": "Project", "description": "Take screenshots of the dashboard and CRUD features.", "dueDate": "2026-09-30", "priority": "Medium", "status": "Pending"}, {"id": 26, "title": "Prepare Activity Report", "subject": "VSB Skill Vault", "description": "Prepare the report for Activity 3 submission.", "dueDate": "2026-09-30", "priority": "High", "status": "Pending"}, {"id": 27, "title": "Practice Presentation", "subject": "Communication", "description": "Practice explaining the project in simple English.", "dueDate": "2026-10-01", "priority": "Medium", "status": "Pending"}, {"id": 28, "title": "Learn CSS Flexbox", "subject": "Web Development", "description": "Practice flexbox layout with a small webpage.", "dueDate": "2026-10-01", "priority": "Low", "status": "Completed"}, {"id": 29, "title": "Learn CSS Grid", "subject": "Web Development", "description": "Practice grid layouts and responsive cards.", "dueDate": "2026-10-02", "priority": "Low", "status": "Pending"}, {"id": 30, "title": "Java Constructor Practice", "subject": "Java", "description": "Write examples using default and parameterized constructors.", "dueDate": "2026-10-02", "priority": "Medium", "status": "Pending"}, {"id": 31, "title": "DSA Stack Implementation", "subject": "DSA", "description": "Implement stack operations using arrays.", "dueDate": "2026-10-03", "priority": "Medium", "status": "Pending"}, {"id": 32, "title": "Queue Implementation", "subject": "DSA", "description": "Implement enqueue and dequeue operations.", "dueDate": "2026-10-03", "priority": "Medium", "status": "Pending"}, {"id": 33, "title": "Revise DBMS Keys", "subject": "DBMS", "description": "Study primary, foreign, candidate, and composite keys.", "dueDate": "2026-10-04", "priority": "Low", "status": "Completed"}, {"id": 34, "title": "Study Operating Systems", "subject": "Operating Systems", "description": "Revise processes, threads, and memory management.", "dueDate": "2026-10-04", "priority": "Medium", "status": "Pending"}, {"id": 35, "title": "Computer Networks Notes", "subject": "Computer Networks", "description": "Write short notes on OSI and TCP/IP models.", "dueDate": "2026-10-05", "priority": "Medium", "status": "Pending"}, {"id": 36, "title": "AI Search Algorithms", "subject": "Artificial Intelligence", "description": "Revise uninformed search and bidirectional search.", "dueDate": "2026-10-05", "priority": "High", "status": "Pending"}, {"id": 37, "title": "Python Function Practice", "subject": "Python", "description": "Solve problems using user-defined functions.", "dueDate": "2026-10-06", "priority": "Low", "status": "Completed"}, {"id": 38, "title": "Build To-Do List", "subject": "JavaScript", "description": "Create a small to-do list using DOM manipulation.", "dueDate": "2026-10-06", "priority": "Medium", "status": "Pending"}, {"id": 39, "title": "JavaScript DOM Practice", "subject": "JavaScript", "description": "Practice querySelector, events, and form handling.", "dueDate": "2026-10-07", "priority": "Medium", "status": "Pending"}, {"id": 40, "title": "LocalStorage Practice", "subject": "JavaScript", "description": "Store and retrieve simple objects using LocalStorage.", "dueDate": "2026-10-07", "priority": "Low", "status": "Pending"}, {"id": 41, "title": "Update LinkedIn Profile", "subject": "Career", "description": "Add current skills and project details to the profile.", "dueDate": "2026-10-08", "priority": "Medium", "status": "Completed"}, {"id": 42, "title": "Create Resume Draft", "subject": "Career", "description": "Prepare a one-page resume for internship applications.", "dueDate": "2026-10-08", "priority": "High", "status": "Pending"}, {"id": 43, "title": "Practice Interview Questions", "subject": "Career", "description": "Practice common software developer interview questions.", "dueDate": "2026-10-09", "priority": "Medium", "status": "Pending"}, {"id": 44, "title": "Learn REST API Basics", "subject": "Web Development", "description": "Understand GET, POST, PUT, and DELETE.", "dueDate": "2026-10-09", "priority": "Medium", "status": "Pending"}, {"id": 45, "title": "Explore Spring Boot", "subject": "Java", "description": "Create a basic Spring Boot project and explore its structure.", "dueDate": "2026-10-10", "priority": "Low", "status": "Pending"}, {"id": 46, "title": "Learn React Basics", "subject": "React", "description": "Practice components, props, and state.", "dueDate": "2026-10-10", "priority": "Medium", "status": "Pending"}, {"id": 47, "title": "Complete College Record", "subject": "General", "description": "Finish pending practical record pages.", "dueDate": "2026-10-11", "priority": "High", "status": "Pending"}, {"id": 48, "title": "Organize Study Materials", "subject": "General", "description": "Arrange notes and project files into folders.", "dueDate": "2026-10-11", "priority": "Low", "status": "Completed"}, {"id": 49, "title": "Weekly Study Review", "subject": "General", "description": "Review completed tasks and plan the next week.", "dueDate": "2026-10-12", "priority": "Medium", "status": "Pending"}, {"id": 50, "title": "Review Weekly Progress", "subject": "General", "description": "Check completed work and prepare the task list for the next week.", "dueDate": "2026-10-13", "priority": "Medium", "status": "Pending"}];

let tasks = JSON.parse(localStorage.getItem("studentTasks"));
const starterVersion = "50-tasks-v1";

if (localStorage.getItem("studentTasksStarterVersion") !== starterVersion) {
    tasks = starterTasks;
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
    localStorage.setItem("studentTasksStarterVersion", starterVersion);
} else if (!Array.isArray(tasks)) {
    tasks = [];
}

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");
const filterStatus = document.getElementById("filterStatus");
const filterPriority = document.getElementById("filterPriority");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskId = document.getElementById("taskId").value;

    const taskData = {
        id: taskId ? Number(taskId) : Date.now(),
        title: document.getElementById("taskTitle").value.trim(),
        subject: document.getElementById("subject").value.trim(),
        description: document.getElementById("description").value.trim(),
        dueDate: document.getElementById("dueDate").value,
        priority: document.getElementById("priority").value,
        status: document.getElementById("status").value
    };

    if (taskId) {
        tasks = tasks.map(task => task.id === Number(taskId) ? taskData : task);
    } else {
        tasks.push(taskData);
    }

    saveTasks();
    cancelEdit();
    displayTasks();
});

function displayTasks() {
    const searchText = searchInput.value.toLowerCase();
    const selectedStatus = filterStatus.value;
    const selectedPriority = filterPriority.value;

    const filteredTasks = tasks.filter(task => {
        const matchesSearch =
            task.title.toLowerCase().includes(searchText) ||
            task.subject.toLowerCase().includes(searchText);

        const matchesStatus =
            selectedStatus === "All" || task.status === selectedStatus;

        const matchesPriority =
            selectedPriority === "All" || task.priority === selectedPriority;

        return matchesSearch && matchesStatus && matchesPriority;
    });

    taskList.innerHTML = "";

    if (filteredTasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    filteredTasks.forEach(task => {
        const card = document.createElement("div");
        card.className = "task-card";

        const priorityClass = task.priority.toLowerCase();
        const statusClass = task.status.toLowerCase();

        card.innerHTML = `
            <div class="task-top">
                <div>
                    <div class="task-title">${escapeHTML(task.title)}</div>
                    <div class="task-subject">📚 ${escapeHTML(task.subject)}</div>
                </div>
                <span class="badge ${priorityClass}">${task.priority}</span>
            </div>

            <div class="task-description">
                ${escapeHTML(task.description || "No description provided.")}
            </div>

            <div class="task-info">
                <span class="badge ${statusClass}">${task.status}</span>
                <span class="badge">📅 Due: ${formatDate(task.dueDate)}</span>
            </div>

            <div class="task-actions">
                <button class="edit-btn" onclick="editTask(${task.id})">✏️ Edit</button>
                ${task.status === "Pending"
                    ? `<button class="complete-btn" onclick="completeTask(${task.id})">✓ Complete</button>`
                    : ""}
                <button class="delete-btn" onclick="deleteTask(${task.id})">🗑 Delete</button>
            </div>
        `;

        taskList.appendChild(card);
    });

    updateDashboard();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) return;

    document.getElementById("taskId").value = task.id;
    document.getElementById("taskTitle").value = task.title;
    document.getElementById("subject").value = task.subject;
    document.getElementById("description").value = task.description;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("priority").value = task.priority;
    document.getElementById("status").value = task.status;

    document.getElementById("formTitle").textContent = "Update Task";
    document.getElementById("submitBtn").textContent = "Update Task";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function completeTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, status: "Completed" };
        }
        return task;
    });

    saveTasks();
    displayTasks();
}

function deleteTask(id) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        displayTasks();
    }
}

function cancelEdit() {
    taskForm.reset();
    document.getElementById("taskId").value = "";
    document.getElementById("formTitle").textContent = "Add New Task";
    document.getElementById("submitBtn").textContent = "Add Task";
}

function saveTasks() {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
}

function updateDashboard() {
    document.getElementById("totalTasks").textContent = tasks.length;
    document.getElementById("pendingTasks").textContent =
        tasks.filter(task => task.status === "Pending").length;
    document.getElementById("completedTasks").textContent =
        tasks.filter(task => task.status === "Completed").length;
    document.getElementById("highTasks").textContent =
        tasks.filter(task => task.priority === "High").length;
}

function formatDate(dateString) {
    if (!dateString) return "No date";
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

searchInput.addEventListener("input", displayTasks);
filterStatus.addEventListener("change", displayTasks);
filterPriority.addEventListener("change", displayTasks);

displayTasks();
