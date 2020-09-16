const theme_button = document.querySelector("#theme-button");
const tmeme_button_text = document.querySelector(
    "#theme-button > .theme-button__text"
);
const moon_icon = document.querySelector("#moon-icon");
const sun_icon = document.querySelector("#sun-icon");
const storage = window.localStorage;
let theme_mode = null; // light, dark

// LocalStrage에 저장된 컬러테마를 불러오는 함수
function loadThemeMode() {
    const mode = localStorage.getItem("mode") || "light"; // mode값이 저장 안되어있으면 default로 light 모드 설정
    theme_mode = mode;
    renderThemeMode();
    saveThemeMode(mode);
}

// 컬러테마를 저장하는 함수
function saveThemeMode(mode) {
    storage.setItem("mode", mode);
}

// 현재 테마를 바꾸는 함수
function changeThemeMode() {
    if (theme_mode === "light") {
        theme_mode = "dark";
    } else if (theme_mode === "dark") {
        theme_mode = "light";
    } else {
        new Error(
            `❗ Invalid Theme Mode ${theme_mode}, check theme mode...!!!`
        );
    }
    renderThemeMode();
    saveThemeMode(theme_mode);
}

// 현재 컬러테마를 렌더링하는 함수
function renderThemeMode() {
    if (theme_mode === "dark") {
        document.body.classList.remove("lightmode");
        document.body.classList.add("darkmode");
        moon_icon.classList.add("hidden");
        sun_icon.classList.remove("hidden");
        tmeme_button_text.textContent = "라이트모드로 보기";
    } else if (theme_mode === "light") {
        document.body.classList.add("lightmode");
        document.body.classList.remove("darkmode");
        moon_icon.classList.remove("hidden");
        sun_icon.classList.add("hidden");
        tmeme_button_text.textContent = "다크모드로 보기";
    } else {
        new Error(
            `❗ Invalid Theme Mode ${theme_mode}, check theme mode...!!!`
        );
    }
}

// DOM 객체가 로드될때 이벤트 등록
window.addEventListener("DOMContentLoaded", () => {
    loadThemeMode();
    theme_button.addEventListener("click", changeThemeMode);
});
