window.onload = () => {
    //Add task to list
    const todoForm = document.getElementById('todo-form');
    if (todoForm) {
        todoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const todoElement = todoForm.list.value;
            const element = createComponent('div', 'element');
            const mainText = createComponent('div', 'main-text');
            const deleteBtn = createComponent('div', 'delete-btn');
            deleteBtn.innerHTML = '<ion-icon name="trash"></ion-icon>';
            element.appendChild(mainText);
            element.appendChild(deleteBtn);
            const mainContent = document.querySelector('.main-content');
            const regex = /^\s*$/ ;
            if (mainContent && todoElement && !regex.test(todoElement)) {
                mainText.innerText = firstLetterToUpperCase(todoElement);                
                mainContent.appendChild(element);
            }
            todoForm.list.value = '';
        })
    }
    const mainContent = document.querySelector('.main-content'); 
    if (mainContent) {                
        mainContent.addEventListener('click', (event) => {
            //Finish Task
            if (event.target.classList.contains('main-text')) {
                event.target.classList.toggle('done-task');                
            }
            //Delete Task
            if (event.target.parentElement.classList.contains('delete-btn')) {
                event.target.parentElement.parentElement.remove();                
            }
        })
    }

    //Reusable functions
    const createComponent = (el, cl) => {
        const element = document.createElement(el);
        if (element) {
            element.classList.add(cl);
        }
        return element;
    }

    const firstLetterToUpperCase = (str) => {
        if (str) {         
            let newArr = str.split('');
            let newStr = '';    
            newArr[0] = newArr[0].toUpperCase();
            newArr.forEach(element => {
                newStr += element;
            });
            return newStr;   
        }
    }


}