let num;
let numList;
let choosenOrderedList;
let unorderedListChoosen;
let choosePosition = document.forms.choosePosition;
let fontsArray = ['Georgia', 'Times New Roman', 'Arial', 'Shrikhand', 'Tangerine', 'Maven Pro', 'Verdana', 'Eater', 'Trebuchet MS', 'Impact', 'Indie Flower', 'Orbitron'];

function getId(a) {
	return document.getElementById(a);
}

/*При нажатті на кнопку "Bold" функція "changeWeight" мінятиме жирність шрифту у контейнері з Id 'resultView' */
getId('bold').addEventListener('click', function () {
	if (getId('resultView').style.fontWeight == '700') {
		getId('resultView').style.fontWeight = '400'
	} else {
		getId('resultView').style.fontWeight = '700'
	}
});

/*При нажатті на кнопку "Italic" функція "changeFontStyle" мінятиме cтиль шрифту у контейнері з Id 'resultView' */
getId('italic').addEventListener('click', function () {
	if (getId('resultView').style.fontStyle == 'italic') {
		getId('resultView').style.fontStyle = 'normal'
	} else {
		getId('resultView').style.fontStyle = 'italic'
	}
});

/*При нажатті на кнопку "Underline" функція "underlineElements" підкреслюватиме текст у контейнері з Id 'resultView' */
getId('underline').addEventListener('click', function () {
	if (getId('resultView').style.textDecoration == 'underline') {
		getId('resultView').style.textDecoration = 'none'
	} else {
		getId('resultView').style.textDecoration = 'underline'
	}
});


/*Функція перебирає всі елементи циклу, та при кліку на елемент задає йому шрифт відповідно до value цього елемента*/
getId('chooseFontSize').addEventListener('change', function changeFontSize() {
	for (let fs = 0; fs < getId('chooseFontSize').length; fs++) {
		if (getId('chooseFontSize').options[fs].selected) {
			getId('resultView').style.fontSize = this.value;
		}
	}
});
/*Функція перебирає всі елементи циклу, та при кліку на елемент задає йому тип шрифта відповідно до value цього option*/
getId('chooseFontFamily').addEventListener('change', function () {
	for (let ff = 0; ff < getId('chooseFontFamily').length; ff++) {
		if (getId('chooseFontFamily').options[ff].selected) {
			getId('resultView').style.fontFamily = this.value;
		}
	}
});

/*Перший цикл перебирає всі options для вибору шрифта. Внутрішній цикл перебирає всі елементи масива. Якщо value option співпадає == елементу  масива то цьому елементу option присвоюється тип шрифта, що спвіпав*/
for (let ff = 0; ff < getId('chooseFontFamily').length; ff++) {
	for (let i = 0; i < fontsArray.length; i++) {
		if (getId('chooseFontFamily').options[ff].value == fontsArray[i]) {
			getId('chooseFontFamily').options[ff].style.fontFamily = fontsArray[i];
		}
	}
}

/*Дві нище функції вкионуються при кліку та показують контейнер з вибором кольорів*/
getId('color').addEventListener('click', function () {
	if (getId('chooseTextColor').style.display == 'block') {
		getId('chooseTextColor').style.display = 'none';
	} else {
		getId('chooseTextColor').style.display = 'block';
		getId('buttonBG').style.display = 'none';
	}
	num = 0;
});

getId('background').addEventListener('click', function () {
	if (getId('chooseTextColor').style.display == 'block') {
		getId('chooseTextColor').style.display = 'none';
	} else {
		getId('chooseTextColor').style.display = 'block';
		getId('buttonBG').style.display = 'block';
		getId('picturesBox').style.display = 'none';

	}
	num = 1;
});

getId('buttonBG2').addEventListener('click', function () {
	getId('chooseTextColor').style.display = 'block';
	getId('picturesBox').style.display = 'none';
});

/*Цикл перебирає всі дочірні елементи контенера з кольорами (getId('colorsTypes')), та при кліку на дочірній елемент задається або  колір тексту або колір фону, в залежності від хначення змінної "num"*/
for (let color = 0; color < getId('colorsTypes').childNodes.length; color++) {
	getId('colorsTypes').childNodes[color].addEventListener('click', useThisColor);

	function useThisColor() {
		if (num == 0) {
			getId('resultView').style.color = getId('colorsTypes').childNodes[color].innerHTML;
		} else {
			document.body.style.backgroundColor = getId('colorsTypes').childNodes[color].innerHTML;
			document.body.style.backgroundImage = 'none';
		}
	}
}
/*При кліку на будь-які елементи сторінки поза контейнера з кольорами, контейнера з зображеннями, формою для створення таблиці або списку, цим формам та контейнерам буде присвоєно "display:none"  */
window.addEventListener('click', function (event) {
	if (event.target.className == 'colorBox') {
		getId('chooseTextColor').style.display = 'block';
	} else if (event.target.className == 'pictureBox') {
		getId('picturesBox').style.display = 'block';
	} else if (event.target.className == 'tableInput' || event.target.className == 'labelTable' || event.target.className == 'tabButton') {
		getId('tableBox').style.display = 'flex';
	} else if (event.target.className == 'allList' || event.target.className == 'loopRadio') {
		getId('listForm').style.display = 'block';
	} else if (event.target != getId('color') && event.target != getId('background') && event.target != getId('buttonBG') && event.target != getId('chooseTextColor') && event.target != getId('file') && event.target != getId('buttonBG2') && event.target != getId('tableButton') && event.target != getId('listButton') && event.target != getId('tableBox') && event.target != getId('listForm')) {
		getId('chooseTextColor').style.display = 'none';
		getId('picturesBox').style.display = 'none';
		getId('tableBox').style.display = 'none';
		getId('listForm').style.display = 'none';
	}
})

/*Цикл для перебору трьох "input type=radio', при виборі одного з них текст поміняє позицію (зліва, середина сторінки, справа)"*/
for (let side = 0; side < choosePosition.length; side++) {
	choosePosition.textPosition[side].addEventListener('click', chooseSide);

	function chooseSide() {
		getId('resultView').style.textAlign = this.value;
	}

}

getId('buttonBG').addEventListener('click', function () {
	getId('picturesBox').style.display = 'block';
});

/*Цикл перебирає всі дочірні елементи  контейнера з Id 'ninePictures', при кліку на дочірні елемент фон сторінки міняється відповідно до внутрішнього вмісту цього дочірнього елемента */

for (let bgImage = 0; bgImage < getId('ninePictures').childNodes.length; bgImage++) {
	getId('ninePictures').childNodes[bgImage].addEventListener('click', useBgImg);

	function useBgImg() {
		document.body.style.backgroundImage = this.innerHTML;
	}
}

getId('edit').addEventListener('click', function () {
	getId('editMenu').style.display = 'block';
	getId('mainNav').style.display = 'none';
	getId('choosePosition').style.display = 'none';
	getId('resultView').style.display = 'none';
	getId('editArea').style.display = 'block';
});

getId('tableButton').addEventListener('click', showTableSetiings);

function showTableSetiings() {
	if (getId('tableBox').style.display == 'flex') {
		getId('tableBox').style.display = 'none';
	} else {
		getId('tableBox').style.display = 'flex';
		getId('listForm').style.display = 'none';
	}
}

getId('resetData').addEventListener('click', cleanAllValues);

function cleanAllValues() {
	getId('rowLength').value = '';
	getId('tableWidth').value = '';
	getId('cellSpacing').value = '';
	getId('borderWidth').value = '';
	getId('columnLength').value = '';
	getId('tableHeight').value = '';
	getId('borderColor').value = '';
}

getId('saveButton').addEventListener('click', saveChanges);

function saveChanges() {
	getId('resultView').innerHTML = getId('typeCode').value;
	getId('choosePosition').style.display = 'block';
	getId('editArea').style.display = 'none';
	getId('resultView').style.display = 'block';
	getId('editMenu').style.display = 'none';
	getId('mainNav').style.display = 'block';
	getId('tableBox').style.display = 'none';

}
/* функція при кліку на кнопу блокування відображає тег div на всю величину екрана, тим самим не даючи змогу подальшого користування всіма елементами сторінки  та виводить форму для підтвердження даних користувача.*/
getId('blockButton').addEventListener('click', blockYourWork);

function blockYourWork() {
	getId('blockButton').style.backgroundColor = 'red';
	getId('blockButton').style.backgroundImage = 'url(./img/256x256-black-white-android-lock.png)';
	getId('blockBackground').style.display = 'block';
}
getId('enterButton').addEventListener('click', confirmUser);

/*При правильно введеному логіні та паролі вікно перевірки особистості користувача щезає, і появляється змога знову користуватися елементами сторінки*/
function confirmUser() {
	if (getId('loginInput').value == 'login' && getId('passwordInput').value == 'password') {
		getId('blockBackground').style.display = 'none';
		getId('blockButton').style.backgroundImage = 'url(./img/unlocked-padlock-png-pin-lock-clipart-unlocked-padlock-2-256.png)';
		getId('blockButton').style.backgroundColor = 'lawngreen';
	} else {
		alert('wrong password or login');
		getId('blockBackground').style.display = 'block';
	}
}
/*Фунція створює таблицю з параметрами, які попередньо вказав користувач*/
getId('createTableBtn').addEventListener('click', function () {
	let newTable = '<table style= "width: ' + getId('tableWidth').value + 'px; height: ' + getId('tableHeight').value + 'px; border:' + getId('borderWidth').value + 'px solid ' + getId('borderColor').value + ';  border-spacing: ' + getId('cellSpacing').value + 'px">';
	for (let rows = 0; rows < getId('rowLength').value; rows++) {
		newTable += '<tr>';
		for (let columns = 0; columns < getId('columnLength').value; columns++) {
			newTable += '<td style= "border:' + getId('borderWidth').value + 'px solid ' + getId('borderColor').value + '"></td>';
		}
		newTable += '</tr>';
	}
	newTable += '</table>';
	getId('typeCode').value += newTable;
	getId('tableBox').style.display = 'none';

});

getId('listButton').addEventListener('click', function () {
	if (getId('listForm').style.display == 'block') {
		getId('listForm').style.display = 'none';
	} else {
		getId('listForm').style.display = 'block';
		getId('tableBox').style.display = 'none';
	}
});
/*Фунція перебирає через цикл всі типи позначення нумерованого списку та при кліку застосовує цей тип позначення у списку, так само і працює функція нище цієї, відмінність лише що вона перебирає всі типи позначення не нумерованого списку*/
getId('listTypeOrdered').addEventListener('change', function () {
	for (let i = 0; i < getId('listTypeOrdered').length; i++) {
		if (getId('listTypeOrdered').options[i].selected) {
			choosenOrderedList = this.value;
		}
	}
})

getId('listTypeUnordered').addEventListener('change', function () {
	for (let i = 0; i < getId('listTypeUnordered').length; i++) {
		if (getId('listTypeUnordered').options[i].selected) {
			unorderedListChoosen = this.value;
		}
	}
})

let radio = document.getElementsByClassName('loopRadio');
for (let l = 0; l < radio.length; l++) {
	radio[l].addEventListener('click', function () {
		if (getId('orderList').checked == true) {
			numList = 1;
		} else if (getId('unorderedList').checked == true) {
			numList = 2;
		}
	})
}
/*при кліку на кнопку "Створити список" функція створює список відповідно до вибраних попередньо користувачем параметрів списку*/
getId('createList').addEventListener('click', function () {
	if (numList == 1) {
		let newList = '<ol style=" margin: 20px; list-style-type:' + choosenOrderedList + '">';
		for (let i = 0; i < getId('itemQuantity').value; i++) {
			newList += '<li>some Text</li>'
		}
		newList += '</ol>';
		getId('typeCode').value += newList;
	} else if (numList == 2) {
		console.log(numList);
		let newList = '<ul style=" margin: 20px; list-style-type:' + unorderedListChoosen + '">';
		for (let i = 0; i < getId('itemQuantity').value; i++) {
			newList += '<li>some Text</li>'
		}
		newList += '</ul>';
		getId('typeCode').value += newList;
	}
});

getId('orderList').addEventListener('click', function () {
	getId('listTypeOrdered').style.display = 'inline-block';
	getId('listTypeUnordered').style.display = 'none';

});

getId('unorderedList').addEventListener('click', function () {
	getId('listTypeUnordered').style.display = 'inline-block';
	getId('listTypeOrdered').style.display = 'none';
});

/*При кліку на кнопку 'Виберіть файл' фоном сторінки ставатиме фото вибране користувачем з свого компютера*/
getId('file').addEventListener('change', function () {
	let file = getId('file').files[0];
	let reader = new FileReader();
	reader.onload = function () {
		document.body.style.backgroundImage = 'url(' + reader.result +')'; }
		if (file) {
			reader.readAsDataURL(file);
		} else {}
	})
