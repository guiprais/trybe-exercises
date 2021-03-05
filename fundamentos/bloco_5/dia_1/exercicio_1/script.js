let noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');

for (i = 0; i < noEmergencyTasksH3.length; i += 1) {
  noEmergencyTasksH3[i].style.color = 'white';
  noEmergencyTasksH3[i].style.background = 'black';
}

let noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks');

for (i = 0; i < noEmergencyTasks.length; i += 1) {
  noEmergencyTasks[i].style.background = '#f9db5e';
}
