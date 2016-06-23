

       $(document).ready(function () {

           $('#checking').hide();

           $('#b1').click(function () {

               var userName = $('#username').val();

               //alert('User Name ='+ userName);
               $('#checking').show();
               $.getJSON("/Account/checkUser?username=" + userName, function (data)
               {
                   $('#checking').hide();
                   if (data == false) {
                       $('#question').text("user don't exist");
                      

                   }
                   else {
                       $('#question').text(data);
                   }
               });

           });

       });
