let list = document.querySelector('ul')
let selectBtn = document.querySelector('button')
let form = document.querySelector('form')
let select = document.querySelector('select')

function filmRender (argument) {
	for (let n of database) {
		let item = document.createElement("li")
		let title = document.createElement("h3")
		let genre = document.createElement("span")
		let src = document.createElement("div")
		let details = document.createElement("div")
	
		list.classList.add('list')
		details.classList.add('info')
	
		title.textContent = n.title
		genre.textContent = n.genre
		src.innerHTML = n.src
	
		item.appendChild(src)
		details.appendChild(title)
		details.appendChild(genre)
		item.appendChild(details)
		
		list.appendChild(item)
	}
}

filmRender(database)

/*selectBtn.addEventListener('submit', (event){
	list.innerHTML = null*/
	for (let j of database) {
		if (j.genre == select.value) {
			let item = document.createElement("li")
			let title = document.createElement("h3")
			let genre = document.createElement("span")
			let src = document.createElement("div")
			let details = document.createElement("div")
		
			list.classList.add('list')
			details.classList.add('info')
		
			title.textContent = j.title
			genre.textContent = j.genre
			src.innerHTML = j.src
		
			item.appendChild(src)
			details.appendChild(title)
			details.appendChild(genre)
			item.appendChild(details)
			
			list.appendChild(item)
		}
	
	}
/*
})*/