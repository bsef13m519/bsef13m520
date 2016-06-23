
                                $(document).ready(function () {
                                    $('#checking').hide();
                                    $('#b1').click(function () {
                                        var code = $('#Code').val();
                                        $('#checking').show();
                                        $.getJSON("/Product/CheckCode?Code=" + code, function (data) {
                                            $('#checking').hide();
                                            if (data) {
                                                $('#result').text("Product already exist with same code");
                                            }
                                            else {
                                                $('#result').text("This code is available for use");
                                            }
                                        });
                                    });
                                });
