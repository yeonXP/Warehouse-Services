// static/js/base.js

document.addEventListener("DOMContentLoaded", function () {

    // 로그인한 사용자 표시
    const username = localStorage.getItem("username");
    const fullName = localStorage.getItem("full_name");
    const role = localStorage.getItem("role");

    const currentUser = document.getElementById("current-user");
    const sidebarFullName = document.getElementById("sidebar-full-name");
    const sidebarRole = document.getElementById("sidebar-role");

    if (currentUser) {
	currentUser.innerText = fullName || username || "Guest";
    }

    if (sidebarFullName) {
	sidebarFullName.innerText = fullName || username || "Guest";
    }

    if (sidebarRole) {
	sidebarRole.innerText = role || "-";
    }
    
    // 로그인 후 Welcome Toast 표시
    const toastData = localStorage.getItem("toast");

    if (toastData) {

        const toast = JSON.parse(toastData);

        showToast(
            toast.title,
            toast.message
        );

        localStorage.removeItem("toast");
    }

});

function showToast(title, message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.innerHTML = `
    	<strong style="font-size:22px;">
        	${title}
   	</strong>
    	<br>
    	<span style="font-size:18px;">
        	${message}
    	</span>
    `;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

function logout() {

    fetch("/logout", {
        method: "POST"
    })
    .then(() => {

        localStorage.removeItem("username");
        localStorage.removeItem("role");
        localStorage.removeItem("toast");

        window.location.href = "/login-page";

    });

}
