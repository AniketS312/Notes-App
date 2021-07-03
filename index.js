const addNote = document.querySelectorAll("#add");
const deleteNote = document.querySelectorAll("#delete");
const editNote = document.querySelectorAll("#edit");
const addNew = document.getElementById('add-note');
const mainDiv = document.getElementById('main-div');
const editText = document.querySelectorAll('edit-text')

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

addNew.addEventListener('click', function() {
  const containerElement = document.createElement('div')
  containerElement.classList.add('container')
  containerElement.innerHTML = `
  <div class="container m">
  <div
    class="
      max-w-xs
      w-full
      bg-gray-900
      shadow-lg
      border
      mx-2
      border-double border-green-400
      rounded-md
      p-6
    "
  >
    <div class="flex flex-col">
      <div class="">
        <div class="flex-auto justify-evenly">
          <div
            class="lg:flex py-4 text-sm text-gray-600 mb-3"
            style="
              background: #020013;
              padding: 4px;
              border-radius: 5px;
            "
          >
            <div class="flex-1 inline-flex items-center">
              <div
                class="
                  w-full
                  flex-none
                  text-sm
                  flex
                  items-center
                  text-gray-400
                "
              >
                <ul
                  class="
                    flex flex-row
                    justify-center
                    items-center
                    space-x-2
                  "
                >
                  <li class="">
                    <span class="block p-1">
                      <a class="cursor-pointer">
                        <i class="material-icons">drag_indicator</i>
                      </a>
                    </span>
                  </li>
                  <li class="">
                    <span class="block p-1">
                      <a class="cursor-pointer">
                        <i class="material-icons text-green-400"
                          >donut_large</i
                        ></a
                      >
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="inline-flex items-center">
              <ul
                class="
                  flex flex-row
                  justify-center
                  items-center
                  space-x-2
                "
              >
                <li class="">
                  <span class="block p-1"
                    ><a class="cursor-pointer" id="delete">
                      <i class="material-icons text-gray-400 text-sm"
                        >delete</i
                      ></a
                    >
                  </span>
                </li>
                <li class="">
                  <span class="block p-1">
                    <a class="cursor-pointer" id="edit" >
                      <i class="material-icons text-gray-400">edit</i>
                    </a>
                  </span>
                </li>
                <li class="">
                  <span class="block p-1">
                    <a class="cursor-pointer" id="add">
                      <i class="material-icons text-gray-400"
                        >add_box</i
                      ></a
                    >
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div
              class="
                flex
                items-center
                w-full
                justify-between
                min-w-0
                mb-3
              "
            >
            <h2
            id="edit-text"
              class="
                text-lg
                mr-auto
                italic
                cursor-pointer
                text-gray-300
                hover:text-gray-500"                   
                contenteditable="true"
                   >
             Click Here to add some text.
            </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
  mainDiv.appendChild(containerElement)
})

editText.forEach(element => {
  element.setAttribute('contenteditable', 'true')
} )