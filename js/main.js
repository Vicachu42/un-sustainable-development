import { getGoals } from "./api.js";

/*
    In this module, focus on displaying the API that was fetched in the other module. In my head it makes the code a bit cleaner and it's easier to separate which function does what.

    While I acknowledge that there are other examples which separated display() and addEventListener, this was the way I managed to get the code to work. 

    I also chose to nam this module "main.js" instead of "index.js", because it makes more sense in my mind to not have files with the same name.
*/

const goalBox = document.querySelector('.goal__box');
goalBox.onload = getGoals();

export function display(item, index) {
    let displayIndex = index + 1;
    let goalElement = document.createElement('h2');
    goalElement.id = "goal__" + displayIndex;

    goalElement.innerHTML += "Goal " + displayIndex + ": " + item.title;
    goalBox.appendChild(goalElement);

    let descElement = document.createElement('h3');
    descElement.innerHTML = item.description;
    descElement.hidden = true;
    goalElement.appendChild(descElement);

    for (let i = 0; i < item.targets.length; i++) {
        const tmpElement = document.createElement('p');
        tmpElement.hidden = true;
        tmpElement.innerHTML = "&#9830 " + JSON.stringify(item.targets[i].title)
        goalElement.appendChild(tmpElement);
    }

    goalElement.addEventListener('click', function() {
        for (let i = 0; i < goalElement.childNodes.length; i++) {
            let child = goalElement.childNodes[i];
            child.hidden = !child.hidden;
        }
    });
}