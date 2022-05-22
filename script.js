
var url = location.pathname.split("/");
let vmi = location.pathname.lastIndexOf("/")
console.log(location.pathname)
console.log(vmi)
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
