class Task {
    constructor(name, description, dueDate, priority, project) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.project = project;
    }
}

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

export const createLayout = () => {
    const header = document.createElement('header');
    header.id = 'header';
    header.innerText = 'To Do';
    document.body.appendChild(header);
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    document.body.appendChild(wrapper);
    const nav = document.createElement('nav');
    nav.id = 'nav';
    wrapper.appendChild(nav);
    const content = document.createElement('div');
    content.id = 'content';
    content.innerHTML = '<div id="project-description"><b>Create a project to get started!</b></div>';
    wrapper.appendChild(content);
    projectPage();
}

const currentProject = (() => {
    let currentProject = null;
    const getCurrentProject = () => currentProject;
    const setCurrentProject = (project) => currentProject = project;
    return {getCurrentProject, setCurrentProject};
})(); 

const projectPage = () => {
    const content = document.getElementById('content');
    const addChecklist = document.createElement('button');
    addChecklist.id = 'add-checklist';
    addChecklist.innerText = '+';
    const updateNav = (() => {
        const nav = document.getElementById('nav');
        nav.innerHTML = '';
        const heading = document.createElement('div');
        heading.id = 'heading';
        heading.innerText = 'Projects';
        nav.appendChild(heading);
        const projectsList = projectList.getProjects();
        projectsList.forEach((project) => {
            const newProject = document.createElement('button');
            newProject.id = 'checklist';
            newProject.textContent = project.title;
            nav.appendChild(newProject);
            newProject.addEventListener('click', () => {
               currentProject.setCurrentProject(project);
               console.log(currentProject.getCurrentProject());
               content.innerHTML = '';
               const projectDescription = document.createElement('div');
               projectDescription.id = 'project-description';
               projectDescription.textContent = project.description;
               content.appendChild(projectDescription);
               taskPage();
            });
            newProject.click();
        })
    })();
    nav.appendChild(addChecklist);
    addChecklist.addEventListener('click', () => {
        if (document.body.contains(document.getElementById('new-project-form'))) {
            document.getElementById('new-project-form').classList.toggle('hidden');
        } else {
            newProjectPage();
        }
    });
    if(projectList.getProjects().length > 0) {
        taskPage();
    } else {
        content.innerHTML = '<div id="project-description"><b>Create a project to get started!</b></div>';
        document.getElementById('add-checklist').click();
    }
}

const newProjectPage = () => {
    const content = document.createElement('div');
    content.id = 'new-project-form';
    const heading = document.createElement('div');
    heading.id = 'heading';
    heading.innerText = 'New Project';
    const form = document.createElement('form');
    const title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Project Title';
    const description = document.createElement('textarea');
    description.id = 'new-project-description';
    description.placeholder = 'Project Description';
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit';
    submit.id = 'submit-button';
    const cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.id = 'cancel-button';
    cancel.innerText = 'Cancel';
    const buttons = document.createElement('div');
    buttons.id = 'form-buttons';
    
    form.appendChild(heading);
    form.appendChild(title);
    form.appendChild(description);
    buttons.appendChild(submit);
    buttons.appendChild(cancel);
    form.appendChild(buttons);
    content.appendChild(form);
    document.body.appendChild(content);
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        if (title.value.length >= 3 && description.value.length > 0) {
            const project = new Project(title.value, description.value);
            projectList.addProject(project);
            projectPage();
            document.getElementById('new-project-form').classList.toggle('hidden');
        } else if(title.value.length < 3) {
            alert('Title must be at least 3 characters long!');
        } else if(description.value.length < 1) {
            alert('Description must be at least 1 character long!');
        } else {
            alert('Something went wrong!');
        }
    });
    cancel.addEventListener('click', () => {
        content.classList.add('hidden');
    });
}

const taskList = (() => {
    const tasks = [];
    const addTask = (task) => {
        tasks.push(task);
    };
    const removeTask = (task) => {
        tasks.splice(tasks.indexOf(task), 1);
    };
    const getTasks = () => tasks;
    const getFinishedTasks = () => {
        const project = currentProject.getCurrentProject();
        const tasks = getTasksByProject(project);
        const finishedTasks = [];
        tasks.forEach((task) => {
            if (task.completed === true) {
                finishedTasks.push(task);
            }
        });
        return finishedTasks;
    };
    const clearTasks = () => {
        const project = currentProject.getCurrentProject();
        const tasks = getTasksByProject(project);
        console.log(tasks);
        tasks.forEach((task) => {
            removeTask(task);
        });
    };
    const getTasksByProject = (project) => {
        const tasksByProject = [];
        tasks.forEach((task) => {
            if (task.project === project) {
                tasksByProject.push(task);
            }
        });
        return tasksByProject;
    };
    return { addTask, removeTask, getTasks, getFinishedTasks, clearTasks, getTasksByProject };
})();

const taskPage = () => {
    const content = document.getElementById('content');
    const buttons = document.createElement('div');
    buttons.id = 'form-buttons';
    while (content.firstChild != content.lastChild) {
        content.removeChild(content.lastChild);
    }
    const project = currentProject.getCurrentProject();
    const tasks = taskList.getTasksByProject(project);
    tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        const checked = document.createElement('input');
        checked.type = 'checkbox';
        checked.id = 'checkbox';
        checked.addEventListener('click', () => {
            if (!checked.checked) {
                checked.checked = true;
                task.completed = true;
                taskDiv.classList.toggle('checked');
            } else {
                checked.checked = false;
                task.completed = false;
                taskDiv.classList.toggle('checked');
            }
        });
        taskDiv.appendChild(checked);
        taskDiv.classList.add('task');
        const taskName = document.createElement('p');
        taskName.classList.add('task-name');
        taskName.textContent = task.name;
        taskDiv.appendChild(taskName);
        const taskDueDate = document.createElement('p');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.textContent = 'Due: ' + task.dueDate;
        taskDiv.appendChild(taskDueDate);
        const taskDescription = document.createElement('p');
        taskDescription.classList.add('task-description');
        taskDescription.textContent = 'Description: ' + task.description;
        taskDiv.appendChild(taskDescription);
        const taskPriority = document.createElement('p');
        taskPriority.classList.add('task-priority');
        taskPriority.textContent = 'Priority: ' + task.priority;
        taskPriority.classList.add('task-priority');
        taskDiv.appendChild(taskPriority);
        taskDiv.addEventListener('click', () => {
            console.log(task);
            checked.checked = !checked.checked;
            if (checked.checked == true) {
                taskDiv.classList.add('checked');
                task.completed = true;
            } else {
                taskDiv.classList.remove('checked');
                task.completed = false;
            }
        });
        content.appendChild(taskDiv);
        if (task.completed == true) {
            taskDiv.classList.add('checked');
            checked.checked = true;
        } else {
            taskDiv.classList.remove('checked');
            checked.checked = false;
        }
    });
    const newTaskButton = document.createElement('button');
    newTaskButton.textContent = 'New Task';
    newTaskButton.id = 'new-task-button';
    newTaskButton.addEventListener('click', () => {
        if (document.body.contains(document.getElementById('new-task-form'))) {
            document.getElementById('new-task-form').classList.toggle('hidden');
        } else {
            newTaskPage();
        }
    });
    buttons.appendChild(newTaskButton);
    const deleteCompletedButton = document.createElement('button');
    deleteCompletedButton.textContent = 'Delete Finished Tasks';
    deleteCompletedButton.id = 'delete-completed-button';
    deleteCompletedButton.addEventListener('click', () => {
        const finishedTasks = taskList.getFinishedTasks();
        finishedTasks.forEach((task) => {
            taskList.removeTask(task);
            taskPage();
        });
    });
    buttons.appendChild(deleteCompletedButton);
    const deleteAll = document.createElement('button');
    const currProject = currentProject.getCurrentProject();
    deleteAll.textContent = 'Delete All Tasks';
    deleteAll.id = 'delete-all';
    deleteAll.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete all tasks in ${currProject.title}?`)) {
            taskList.clearTasks();
            taskPage();
        }
    });
    buttons.appendChild(deleteAll);
    const deleteProject = document.createElement('button');
    deleteProject.textContent = 'Delete Project';
    deleteProject.id = 'delete-project';
    deleteProject.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete ${currProject.title}?`)) {
            projectList.removeProject(currProject);
            projectPage();
        }
    });
    buttons.appendChild(deleteProject);
    content.appendChild(buttons);
    if (document.body.contains(document.getElementById('new-task-form'))) {
        document.getElementById('new-task-form').classList.toggle('hidden');
    }
};

const newTaskPage = () => {
    const content = document.getElementById('content');
    const newTaskForm = document.createElement('form');
    newTaskForm.setAttribute('id', 'new-task-form');
    newTaskForm.setAttribute('action', 'index.html');
    newTaskForm.setAttribute('method', 'POST');

    const heading = document.createElement('div');
    heading.textContent = 'New Task';
    heading.id = 'new-task-heading';
    newTaskForm.appendChild(heading);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('placeholder', 'Title');

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.setAttribute('placeholder', 'Description');

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'dueDate');

    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('type', 'dropdown');
    priorityInput.setAttribute('name', 'priority');
    priorityInput.setAttribute('placeholder', 'Priority');
    priorityInput.setAttribute('list', 'priority-list');
    const priorityList = document.createElement('datalist');
    priorityList.setAttribute('id', 'priority-list');
    const priorityLow = document.createElement('option');
    priorityLow.setAttribute('value', 'Low');
    const priorityMedium = document.createElement('option');
    priorityMedium.setAttribute('value', 'Medium');
    const priorityHigh = document.createElement('option');
    priorityHigh.setAttribute('value', 'High');
    priorityList.appendChild(priorityLow);
    priorityList.appendChild(priorityMedium);
    priorityList.appendChild(priorityHigh);
    priorityInput.appendChild(priorityList);

    const buttons = document.createElement('div');
    buttons.id = 'form-buttons';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'submit-button');
    submitButton.textContent = 'Add Task';

    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('type', 'button');
    cancelButton.setAttribute('id', 'cancel-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => { taskPage(); });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const project = currentProject.getCurrentProject();
        const task = new Task(title, description, dueDate, priority, project);
        taskList.addTask(task);
        console.log(task);
        taskPage();
    });

    buttons.appendChild(submitButton);
    buttons.appendChild(cancelButton);
    newTaskForm.appendChild(titleInput);
    newTaskForm.appendChild(descriptionInput);
    newTaskForm.appendChild(dueDateInput);
    newTaskForm.appendChild(priorityInput);
    newTaskForm.appendChild(buttons);
    content.appendChild(newTaskForm);
    document.getElementById('wrapper').appendChild(content);
}

const projectList = (() => {
    const projects = [];
    const addProject = (project) => {
        projects.push(project);
    };
    const removeProject = (project) => {
        projects.splice(projects.indexOf(project), 1);
    };
    const getProjects = () => projects;
    const getProjectByDescription= (description) => {
       projects.forEach((project) => {
              if (project.description === description) {
                    return project;
                }
            });
       //if(description === 'Default') {
       //    return projects[0];
       //}    
    }
    const clearProjects = () => {
        projects.splice(0, projects.length);
    };
    return { addProject, removeProject, getProjects, getProjectByDescription, clearProjects };
})();







