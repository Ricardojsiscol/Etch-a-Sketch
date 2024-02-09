document.body.style.cssText = 'display: flex; flex-direction: column; align-items: center'
const container = document.createElement('div')
container.style.cssText = 'width: 500px; margin-top: 20px; display: flex; flex-wrap: wrap;';
const user_btn = document.createElement('button');
user_btn.textContent = 'Press to create a personalized grid';
document.body.appendChild(user_btn);
document.body.appendChild(container);

function createGrid(size){
	const divAmmount = size * size;
	const divWH = 500 / size - 2;
	for (let i = 0; i < divAmmount; i++){
		let div_elem = document.createElement('div');
		div_elem.style.cssText = `width: ${divWH}px; height: ${divWH}px; border: 1px solid black; background-color: rgba(0, 0, 0, 0)`;
		div_elem.dataset.alpha = 0;
		div_elem.addEventListener('mouseenter', () => {
			let currentAlpha = parseFloat(div_elem.dataset.alpha);
			let newAlpha = currentAlpha + 0.1 <= 1 ? currentAlpha + 0.1 : 1;
			div_elem.style.backgroundColor =`rgba(0, 0, 0, ${newAlpha})`;
			div_elem.dataset.alpha = newAlpha;
		})
		container.appendChild(div_elem);
	}
}

function eraseGrid(){
	container.textContent = '';
}

user_btn.addEventListener('click', () => {
	eraseGrid();
	const size = parseInt(prompt("How many columns/row do you nedd?(max 100)"));
	if (size > 100){
		alert ("If you choose a size bigger than 100 your computer might freeze, please choose again");
		createGrid(16);
		return ;
	} else if(size < 1 || isNaN(size)){
		alert("You have introduced a wrong value, please try again");
		createGrid(16);
		return ;
	}
	createGrid(size);
})
createGrid(16);