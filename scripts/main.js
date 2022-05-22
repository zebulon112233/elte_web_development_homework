

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
/* $(".navbar-right-bottom")
    .find("a")
    .map(function() {
        return { object: this, href: $(this).attr("href") };
    })
    .get()
    .forEach(link => {
        if (link.href.split("/")[4].includes(url)) {
            if (!(url === "about" || url === "opening")) {
                $(link.object).addClass("navbar-bottom-active");
            } else if (url.includes("about")) {
                $("#about-dropdown").addClass("navbar-bottom-active");
            } else {
                $("#opening-dropdown").addClass("navbar-bottom-active");
            }
        }
    });
    */
