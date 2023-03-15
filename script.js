window.onload=function (){
    $('.book-consultation-btn').on('click', function (e){
        e.preventDefault();
        $(this).parents('form').prepend(`<div class="row text-center" style=" display: block; width: 80%; margin-left: 10%; max-width: 100%; "><div class="alert alert-primary alert-dismissible fade show" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> <span class="sr-only">Close</span> </button> <strong>Success!</strong> Your message has been sent. </div></div>`);
    })
}