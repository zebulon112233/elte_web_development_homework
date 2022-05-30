

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

document.getElementById('myform').addEventListener('submit', function(e) {
    e.preventDefault(); //to prevent form submission
    appendComment()
   
  });
const appendComment = () =>
{   
    let commentTextValue = document.getElementById("msg").value; 
    let commenterName = document.getElementById("name").value; 

    let commenterData = document.createElement("div")
    let commentData = document.createElement("div")
    let commentBody = document.createElement("div")

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")

    p1.append("Név: ")
    commenterData.append(p1);
    p2.append(commenterName)
    commenterData.append(p2);

    commentBody.append(commenterData)

    let p3 = document.createElement("p")
    let p4 = document.createElement("p")

    p3.append("Komment: ")
    commentData.append(p3);
    p4.append(commentTextValue)
    commentData.append(p4);

    commentBody.append(commentData)

    const commentContainer = document.getElementById("comment-section")
    commentContainer.append(commentBody)


}


