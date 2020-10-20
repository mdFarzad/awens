function modalTrigger(idName) {
    var header = document.querySelector("#" + idName).innerHTML;
    var para = document.querySelector("#" + idName + "-para").innerHTML;
    var link = document.querySelector("#" + idName + "-link").innerHTML;

    $(".modal-header").html(header);
    $(".modal-para").html(para);

    var btn_grp = '<a href="' + link + '" class="indigo white-text waves-effect waves-white btn-flat">Visit Page</a>' +
        ' <a href="#!" class="modal-close red white-text waves-effect waves-white btn-flat">Exit</a></div>';

    var image = '<img src="images/our-reach/' + idName + '.png" width="30%">';
    $(".btn-group").html(btn_grp);
    $(".modal-image").html(image);

}
