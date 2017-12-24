var numberOfItems = $('.page__item').length;
var limitPerPage = 4;
var totalPages = Math.floor(numberOfItems / limitPerPage);

$('.page__item:gt(' + (limitPerPage - 1) +  ')').hide();
$('.pagination__list').append("<li class='pagination__item pagination__number'><a class='pagination__link active' href='javascript:void(0)'>" + 1 + "</a></li>");

for (var i = 2; i <= totalPages; i++) {
    $('.pagination__list').append("<li class='pagination__item pagination__number'><a class='pagination__link' href='javascript:void(0)'>" + i + "</a></li>");
}
$('.pagination__list').append("<li class='pagination__item'><button class='pagination__btn pagination__btn--next'></button></li>");

$('.pagination__link').on('click', function() {
    if($(this).hasClass('active')) {
        return false;
    } else {
        var currentPage = $(this).parent().index();
        var grandTotal = limitPerPage * currentPage;
        $('.pagination__link').removeClass('active');
        $(this).addClass('active');
        $('.page__item').hide();

        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $('.page__item:eq(' + i + ')').show();

        }
    }
});

$('.pagination__btn--next').on('click', function() {
   var currentPage = $('.pagination__link.active').parent().index();
   if (currentPage === totalPages) {
       return false;
   } else {
       currentPage++;
       $('.pagination__link').removeClass('active');
       var grandTotal = limitPerPage * currentPage;
       $('.page__item').hide();
       for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
           $('.page__item:eq(' + i + ')').show();
       }
        $('.pagination__number:eq(' + (currentPage - 1) + ')').find(':first-child').addClass('active');

   }
});

$('.pagination__btn--prev').on('click', function() {
    var currentPage = $('.pagination__link.active').parent().index();
    if (currentPage === 1) {
        return false;
    } else {
        currentPage--;
        $('.pagination__link').removeClass('active');
        var grandTotal = limitPerPage * currentPage;
        $('.page__item').hide();
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $('.page__item:eq(' + i + ')').show();
        }
        $('.pagination__number:eq(' + (currentPage - 1) + ')').find(':first-child').addClass('active');

    }
});