let add = document.getElementById("add") as HTMLElement;
let remove = document.getElementById("delete")!;

let value = document.getElementById("value")!;
let integer: any = 0;

add.addEventListener("click", () => {
  integer += 1;
  value.innerHTML = integer;
});

remove.addEventListener("click", () => {
  integer -= 1;
  value.innerHTML = integer;
});
