const input = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("enert task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listcontainer.appendChild(li);

    let spann=document.createElement("span");
    spann.innerHTML="X";
    li.appendChild(spann);
  }

  input.value="";
  savedata();
}

listcontainer.addEventListener("click",function(e)
{

    if(e.target.tagName==="LI")
        {
            e.target.classList.toggle("checked");
        }
    else if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove();
        }

},false);


function savedata()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}

showdata();



