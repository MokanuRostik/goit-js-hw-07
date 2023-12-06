const listMenu = document.getElementById("categories");
const list = document.querySelectorAll(".item");
console.log(`Number of categories:`, list.length);
list.forEach((item) => {
  const titleList = item.querySelector("h2").textContent;

  const bredList = item.querySelectorAll("ul >li").length;
  console.log(`category: ${titleList}`);
  console.log(`Elements: ${bredList}`);
});
