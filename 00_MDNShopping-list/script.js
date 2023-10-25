const input = document.querySelector('#item');
const button = document.querySelector('#adder');
const list = document.querySelector('ul');

button.addEventListener('click',addListItem);

function addListItem(){
    inpStr = input.value;
    input.value = '';
    if (inpStr === '') {
        input.focus()
        return '';
    } else {
        const newLi = document.createElement('li');
        newLi.textContent = inpStr;

        const newBtn = document.createElement('button');
        newBtn.textContent = "Delete";
        
        newBtn.addEventListener('click',()=>list.removeChild(newLi));
        
        newLi.appendChild(newBtn);
        list.appendChild(newLi);
        input.focus()
        return '';
    }
}