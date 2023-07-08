console.log("ok")

 const menuList = document.getElementById("menu")
    menuList.style.maxHeight = "0px"

    function showMenu() {
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "120px"
        } else {
            menuList.style.maxHeight = "0px"
        }
    }

    menuList.addEventListener ('click', showMenu)