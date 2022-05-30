

/// Navbar link coloring
const url = location.pathname.split("/");
const urlLastPart = url[url.length-1]
console.log(url[url.length-1])
const navBarChildren = document.getElementById("navbar").children;
if(urlLastPart === "" || urlLastPart === "index.html")
{
    navBarChildren[0].classList.add("active-page")
}
else if( urlLastPart === "seen.html")
{
    navBarChildren[1].classList.add("active-page")
}
else if( urlLastPart === "to-be-watched.html")
{
    navBarChildren[2].classList.add("active-page")
}
else if( urlLastPart === "comments.html")
{
    navBarChildren[3].classList.add("active-page")
}
