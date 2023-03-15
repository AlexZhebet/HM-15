const addBtn = document.getElementById('buttonAdd')
const delete2 = document.getElementById('delete')

addBtn.addEventListener('click', () => {
    const bloc = toAdd()
    bloc ? contentId.appendChild(bloc) : null
})

delete2.addEventListener('click', () => {
    contentId.removeChild(contentId.children[contentId.children.length - 1])
})

function toAdd() {
    if (!input.value) return null
    const bloc = document.createElement('div')
    bloc.classList.add('button_text')
    bloc.innerText = input.value
    input.value = ''
    bloc.addEventListener('click', (e) => {
        e.target.classList.toggle('purple')
    })
    return bloc
}
