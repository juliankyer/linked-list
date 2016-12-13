$('#user-enter-button').on('click', function(){
   newCard();
});

$('.link-column').on('click', '#link-read', function(){
  $(this).closest('.link-tab').toggleClass('read')
});

$('.link-column').on('click', '#link-delete', function(){
  $(this).closest('.link-tab').remove()
});

$('#user-title-input, #user-url-input').keyup(function(){
  var title = $('#user-title-input').val();
  var url = $('#user-url-input').val();
    if (title && url){
      $('#user-enter-button').attr('disabled', false)
    } else {
      $('#user-enter-button').attr('disabled', true)
    }
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
