const toggleThemeBtn = document.querySelector(".header__theme-button");

// 로컬 스토리지로 html 태그에 클래스 삽입
document.onload = setInitialTheme(localStorage.getItem("theme"));
function setInitialTheme(themekey) {
  if (themekey === "dark") {
    document.documentElement.classList.add("darkTheme");
  } else {
    document.documentElement.classList.remove("darkTheme");
  }
}

toggleThemeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("darkTheme");

  if (document.documentElement.classList.contains("darkTheme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
