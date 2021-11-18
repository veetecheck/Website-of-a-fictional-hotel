$(function (){
    $('[data-toggle="tooltip"]').tooltip();
  });
$(function () {
    $('[data-toggle="popover"]').popover()
  })

$('.modal').on('hide.bs.modal', function () {
    var memory = $(this).html();
    $(this).html(memory);
});
