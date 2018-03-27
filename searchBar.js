
//--------------------------------------
  // Search bar
  var searchNow = function() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search_field");
    // input = $scope.searchField;
    filter = input.value.toUpperCase();
    table = document.getElementById("data_table");
    tr = table.getElementsByTagName("tr");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
      // Hide Row and if it matches any query, show it
      tr[i].style.display = "none";
      // Try Name Field
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
      }
      // Try Nickname Field
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
      }
      // Try Email Field
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }
      }
    }
  }
  // End Search Bar
  //--------------------------------------

  // A $( document ).ready() block.
  $( document ).ready(function() {
      console.log( "ready!" );

      $("#search_button").click(
        function(){
          console.log("Searching");
          console.log( $("#search_field").val() );
        });
  });
