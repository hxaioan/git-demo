$(document).ready(function(){
    var timer = null;
    var timer1 = null;
    $("#mi-phone").hover(function(){
        clearTimeout(timer1);
        $("#phoneStype").slideDown("fast");
    },function(){
        timer = setTimeout(function(){
            $("#phoneStype").slideUp("fast");
        },200);
    });

    $("#phoneStype").hover(function(){
        clearTimeout(timer);
        $("#phoneStype").show("fast");
    },function(){
        timer1 = setTimeout(function(){
            $("#phoneStype").slideUp("fast");
        },200);
    });
});



$(document).ready(function(){
    var timer = null;
    var timer1 = null;
    $("#mi-phone1").hover(function(){
        clearTimeout(timer1);
        $("#phoneStype1").slideDown("fast");
    },function(){
        timer = setTimeout(function(){
            $("#phoneStype1").slideUp("fast");
        },200);
    });

    $("#phoneStype1").hover(function(){
        clearTimeout(timer);
        $("#phoneStype1").show("fast");
    },function(){
        timer1 = setTimeout(function(){
            $("#phoneStype1").slideUp("fast");
        },200);
    });
});

$(document).ready(function(){
    var timer = null;
    $("#mi-phone2").hover(function(){
        $("#phoneStype2").slideDown("fast");
    },function(){
        timer = setTimeout(function(){
            $("#phoneStype2").slideUp("fast");
        },400);
    });

    $("#phoneStype2").hover(function(){
        clearTimeout(timer);
        $("#phoneStype2").slideDown("fast");
    },function(){
        $("#phoneStype2").slideUp("fast");
    });
});

$(document).ready(function(){
    var timer = null;
    $("#mi-phone3").hover(function(){
        $("#phoneStype3").slideDown("fast");
    },function(){
        timer = setTimeout(function(){
            $("#phoneStype3").slideUp("fast");
        },400);
    });

    $("#phoneStype3").hover(function(){
        clearTimeout(timer);
        $("#phoneStype3").slideDown("fast");
    },function(){
        $("#phoneStype3").slideUp("fast");
    });
});

$(document).ready(function(){
    var timer = null;
    $("#mi-phone4").hover(function(){
        $("#phoneStype4").slideDown("fast");
    },function(){
        timer = setTimeout(function(){
            $("#phoneStype4").slideUp("fast");
        },400);
    });

    $("#phoneStype4").hover(function(){
        clearTimeout(timer);
        $("#phoneStype4").slideDown("fast");
    },function(){
        $("#phoneStype4").slideUp("fast");
    });
});

$(document).ready(function(){
    var timer = null;
    $("#product").hover(function(){
        $("#phoneProduct").show("fast");
    },function(){
        timer = setTimeout(function(){
            $("#phoneProduct").hide("fast");
        },200);
    });

    $("#phoneProduct").hover(function(){
        clearTimeout(timer);
        $(this).show("fast");
    },function(){
        $(this).hide("fast");
    });
});

$(document).ready(function(){
    var timer = null;
    $("#product1").hover(function(){
        $("#TVProduct").show("fast");
    },function(){
        timer = setTimeout(function(){
            $("#TVProduct").hide("fast");
        },200);
    });

    $("#TVProduct").hover(function(){
        clearTimeout(timer);
        $(this).show("fast");
    },function(){
        $(this).hide("fast");
    });
});