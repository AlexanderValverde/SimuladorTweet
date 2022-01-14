const input = document.querySelector("textarea");
const placeholder = document.querySelector(".placeholder");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector(".ga");
const empty = document.querySelector(".empty");
const contador = document.querySelector(".counter");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;
  console.log(text);
  contador.innerHTML = '<span>280</span>';
  contador.style.display = "none";

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    addBtn.classList.remove("active");
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete uil uil-trash-alt";
  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    const items = document.querySelectorAll(".li");
    if (items.length === 0) {
      empty.style.display = "block";
      tweettitle.style.display = "none";
    }
  });
  return deleteBtn;
}

//Contador de caracteres 
function countChars(obj){
  var maxLength = 280;
  let currentlength = obj.value.length;

  var charRemain = (maxLength - currentlength);
  if(charRemain < 0){
    contador.innerHTML = '<span style="color: rgb(224, 36, 94);display: block;">'+charRemain+'</span>';
    input.style.backgroundColor="white";
    input.style.color="red";
    addBtn.classList.remove("active");
    //contador.style.display = "none";
  }else{
    addBtn.classList.add("active");
    contador.style.display = "block";
    contador.innerHTML = charRemain;
    input.style.color="#0d0d0e";
  }
}


