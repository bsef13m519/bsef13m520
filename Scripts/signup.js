
     $(document).ready(function () {
         $('#checking').hide();
         $('#b1').click(function () {
             var userName = $('#username').val();
             $('#checking').show();
             $.getJSON("/Account/CheckUserName?username=" + userName, function (data)
             {       $('#checking').hide();
                 if (data) {
                     $('#result').text("User already exists in database");
                 }
                 else {
                     $('#result').text("User Name is available");
                 }
             });
         });
     });
