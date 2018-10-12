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

//Function for adding products
function addProduct() {
    var table = document.getElementById("productTable");
    var row = table.insertRow(4);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);                    
    cell1.innerHTML = "4";
    cell2.innerHTML = "Krackles";
    cell3.innerHTML = "Snacks";
    cell4.innerHTML = "2000";
    cell5.innerHTML = "50";
    cell6.innerHTML = "Ksh: 30";
    cell7.innerHTML = "<a href=\"#\">Edit</a>";
    cell8.innerHTML = "<a href=\"#\">Delete</a>";
}

//Function for filtering sales by store attendant
function filterSales() {
    //Declare our variables
    var input, filter, table, tr, td, i;
    
    // capture the user's input
    input = document.getElementById("captureUserInput");

    //Convert the user's input to UpperCase
    filter = input.value.toUpperCase();

    //Get the id our sales table
    table = document.getElementById("salesTable");
    
    //Get the table rows
    tr = table.getElementsByTagName("tr");
    
    //Loop through all the rows in the table
    for (i = 0; i < tr.length; i++) {

      //Get data in each row by searching using the 'Created by' column  
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        //Display the row if search results match otherwise return nothing
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
}

//Function for adding users
function addUser() {
    var table = document.getElementById("userTable");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);                   
    cell1.innerHTML = "3";
    cell2.innerHTML = "Spider Man";
    cell3.innerHTML = "spiderman@gmail.com";
    cell4.innerHTML = "0710683456";
    cell5.innerHTML = "................";
    cell6.innerHTML = "................";
    cell7.innerHTML = "<input type=\"checkbox\" name=\"admin\">"; 
}