
var todoFormulario = document.querySelector("#frmcadastro");
var todoInput = document.querySelector("#cadastro-input");
var todoForm = document.querySelector("#totalform");

    function saveTodo () {
        var total = document.createElement("div");
        total.classList.add("total");

        var todoTexto = document.createElement("input");
        todoTexto.value = todoInput.value;
        total.appendChild(todoTexto);

        var removeIcon = document.createElement("img");
        removeIcon.classList.add("remove-form");
        removeIcon.src = 'imgs/delete.png'

        var editIcon = document.createElement("img");
        editIcon.classList.add("edit-form");
        editIcon.src = 'imgs/edit.png'


        total.appendChild(editIcon)
        total.appendChild(removeIcon)

        todoForm.appendChild(total)
    };

todoFormulario.addEventListener("reset", (e) => {
    e.preventDefault()

   var inputValue = todoInput.value;

   saveTodo(inputValue)

});

document.addEventListener("click", (e) =>{
    var targetEl = e.target;
    var parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("imgs/delete.png")){
        parentEl.classList.toggle("totalform")
        parentEl.remove();
    }
})


