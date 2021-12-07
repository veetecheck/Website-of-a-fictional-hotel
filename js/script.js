$(function (){
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('.modal').on('hide.bs.modal', function () {
    var memory = $(this).html();
    $(this).html(memory);
});
