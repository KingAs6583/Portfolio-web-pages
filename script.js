window.addEventListener("resize", function () {
  const unorder_list = this.document.querySelectorAll("ul.menubar>li>a")
  const maxWidth = 600;
  if (window.innerWidth <= maxWidth) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
});


const ul = document.querySelector("ul.menubar");

function showMenu() {
  const element = document.querySelector("header>nav");
  const maxWidth = 600;
  highlightActiveMenuItem()
  if (window.innerWidth <= maxWidth) {
    if (element.style.overflow == "hidden") {
      element.style.overflow = "visible";
    } else {
      element.style.overflow = "hidden";
    }
  }
}

const menuItems = document.querySelectorAll("ul.menubar>li");

function highlightActiveMenuItem() {
  const activeElement = document.activeElement;
  const previousActive = document.querySelector(".active");
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove("active");
  }
  if (activeElement !== this) {
    activeElement.classList.add("active");
  }

  if (previousActive) {
    previousActive.classList.remove("active");
  }
}

function mailTo() {
  let form = document.getElementById("mailForm");
  let name = form.elements[0].value;
  let subject = form.elements[1].value;
  let message = form.elements[2].value;
  let  link = `mailto:Abubakar.Siddiq6583@gmail.com?subject=${subject}&body=${name + message}`;
  window.location.href = link;
}
