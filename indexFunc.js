// account tag
const userName = window.location.search.replace("?name=", "");
const nameTag = document.getElementById("userTag");
nameTag.innerHTML = `<span style="color:red; font-weight:bold; font-size:24px">${userName}</span> 님 어서오세요 :)`;

//logo a tag
changeHref = () => {
  const logoTag = document.getElementById("logoTag");
  logoTag.href = `./home.html?name=${userName}`;
};

const containerList = document.querySelectorAll(".container");
const links = document.querySelectorAll("li");
let containerOffsetTopList = [];

for (let container of containerList) {
  containerOffsetTopList.push(container.offsetTop);
}
for (let i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    window.scroll({ top: containerOffsetTopList[i] - 80, behavior: "smooth" });
  };
}
