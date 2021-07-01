const addNote = document.querySelectorAll("#add");
const deleteNote = document.querySelectorAll("#delete");
const editNote = document.querySelectorAll("#edit");

addNote.forEach((element) => element.addEventListener("click", addFunction));
deleteNote.forEach((element) =>
  element.addEventListener("click", deleteFunction)
);
editNote.forEach((element) => element.addEventListener("click", editFunction));

function addFunction() {
  console.log("add");
}

function editFunction() {
  console.log("edit");
}

function deleteFunction() {
  console.log("delete");
}
