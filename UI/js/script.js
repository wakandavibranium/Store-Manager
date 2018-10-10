//Render the contents of each side-menu clicked
function openPage(evt, selectedPage) {

    var i, contents, tabs;
    contents = document.getElementsByClassName("contents");
    for (i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    document.getElementById(selectedPage).style.display = "block";
    evt.currentTarget.className += " active";

}

// Get the default page to be rendered and click on the button that renders it
document.getElementById("defaultPage").click();