let add = document.getElementById("btn");
let main = document.getElementById("main");
let list = document.getElementById("list");
let inp = document.getElementById("inp");
let clear = document.getElementById("clear");

let arr = [];
let cnt = 0;
let cnt1 = 0;

add.onclick = () => {
  if (inp.value != "") {
    let box = document.createElement("div");
    box.id = "content";
    let content = document.createElement("div");
    let check = document.createElement("input");
    let del = document.createElement("img");
    del.src = "./delete.jpeg";
    box.appendChild(content);
    box.appendChild(del);
    box.style.display = "flex";
    box.style.gap = "3";
    box.style.justifyContent = "space-between";
    box.firstElementChild.type = "checkbox";
    content.style.backgroundColor = "grey";
    content.innerHTML = inp.value;
    content.style.width = "100%";
    content.style.marginRight = "1.5rem";
    content.style.display = "flex";
    content.style.alignItems = "center";
    content.style.fontSize = "2rem";
    content.style.padding = "0.5rem";
    del.style.height = "64px";
    del.style.cursor = "pointer";

    del.onmouseover = () => {
      del.style.scale = "1.2";
    };
    del.onmouseleave = () => {
      del.style.scale = "1";
    };
    main.appendChild(box);
    cnt++;
    let ok = true;
    del.onclick = () => {
      main.removeChild(box);
      cnt1++;
      document.getElementsByTagName("h2")[0].textContent = `U have ${
        cnt - cnt1
      } tasks pending`;
      if(cnt==cnt1){
        cnt = 0;
        cnt1 = 0;
      }
    };
    document.getElementsByTagName(
      "h2"
    )[0].textContent = `U have ${cnt} tasks pending`;
  }
  inp.value = "";
};
inp.value = "";
