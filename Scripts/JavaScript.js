
function getval(item)
{
   
    var myitem = item.value;
   // alert(myitem);
}


$(document).ready(function () {
    var item = null;
            $('#check').hide();
            $("#searchresult").hide();
            //on search type change 
            $('#searchtype').change(function () {
                 item = $('#searchtype').val();
                $('#check').show();
                $.getJSON("/Home/getItem?searchtype=" + item, function (data) {
                    $('#check').hide();
                    $('#search-box-input').empty();
                    if (data) {
                        $.each(data, function (i, item) {

                            $("#search-box-input").append('<option value= ' +item + '>' +item+ ' <option>');
                           
                        });
                    }

                    else {
                        alert("no data");
                    }

                });
            });



            $('#search-box-input').change(function () {
               
                var items = $('#search-box-input').val();

                $.getJSON("/Home/getItemList?searchitem=" + items + "&searchtype=" + item, function (data) {
                  
                    if (data) {
                        $("#searchresult").show();
                        $.each(data, function (i, item) {
                            alert("showing result in search panel");
                            $("#items").append('<li>' +
                                '<a href=' + "#" + '><img src= ' + "~/images/@item.ImagePath" + '></a>' +
                                '<input type=' + button + ' class= ' + mybutton + ' value= ' + ADDCART + '>' +
                           ' </li>');

                        });
                    }
                    else {
                        alert("no data");
                    }
                });
       });

 });


       
