function login()
{   
    let a = username.value
    let b = password.value
    if (a == "huongthanh" && b == "251007")
    {   
        window.open("home.html")
        document.getElementById(compiler).style.display="block";
    }
    else 
        document.write("Không hợp lệ")
}
