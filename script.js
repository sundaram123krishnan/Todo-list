let add = document.getElementById("btn");
let main = document.getElementById("main");
let list = document.getElementById("list");
let inp = document.getElementById("inp");

add.onclick = () => {
  if (inp.value != "") {
    let box = document.createElement("div");
    let content = document.createElement("div");
    let check = document.createElement("input");
    let del = document.createElement("img");
    del.src = "./delete.jpeg";
    box.appendChild(check);
    box.appendChild(content);
    box.appendChild(del);
    box.style.display = "flex";
    box.style.gap = "3";
    box.style.justifyContent = "space-between";
    box.firstElementChild.type = "checkbox";
    check.style.height = "64px";
    check.style.width = "64px";
    check.style.cursor = "pointer";
    content.style.backgroundColor = "grey";
    content.innerHTML = inp.value;
    content.style.width = "100%";
    content.style.marginLeft = "1.5rem";
    content.style.marginRight = "1.5rem";
    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.fontSize = "2rem";
    content.style.padding = "0.5rem";
    del.style.height = "64px";
    del.style.cursor = "pointer";
    del.onmouseover = ()=>{
        del.style.scale = "1.2";
    }
    del.onmouseleave = ()=>{
        del.style.scale = "1";
    }
    main.appendChild(box);
    del.onclick = ()=>{
        main.removeChild(box);
    }
  }
  inp.value = "";
};

