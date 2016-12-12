$('#user-enter-button').on('click', function(){
   newCard();
});

$('.link-column').on('click', '#link-read', function(){
  $(this).closest('.link-tab').toggleClass('read')
});

$('.link-column').on('click', '#link-delete', function(){
  $(this).closest('.link-tab').remove()
});





function newCard (){
  var siteTitle = $('#user-title-input').val();
  var siteUrl = $('#user-url-input').val();
  $('.link-column').append(
    `<article class="link-tab">
    <h4>`+siteTitle + `</h4>
    <a href="#" id="link-url">`+siteUrl +`</a>
    <div id="button-box">
      <a href="#" id="link-read">Read</a>
      <a href="#" id="link-delete">Delete</a>
  </div>
  </article>`)
};
