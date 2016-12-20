$('#user-enter-button').on('click', function(){
  newCard();
  countTotal();
});

$('.link-column').on('click', '#link-read', function(){
  $(this).closest('.link-tab').toggleClass('seen');
  $(this).toggleClass('read');
  countRead();
});

$('.link-column').on('click', '#link-delete', function(){
  $(this).closest('.link-tab').remove();
  countRead();
  countTotal();
});

$('#user-title-input, #user-url-input').keyup(function(){
  var $title = $('#user-title-input').val();
  var $url = $('#user-url-input').val();
    if (title && url){
      $('#user-enter-button').attr('disabled', false);
    } else {
      $('#user-enter-button').attr('disabled', true);
    }
});

function newCard() {
  var $siteTitle = $('#user-title-input').val();
  var $siteUrl = $('#user-url-input').val();
  $('.link-column').append(
    `<article class="link-tab">
      <h4> ${$siteTitle} </h4>
      <a href=${$siteUrl} target="_blank" id="link-url"> ${$siteUrl} </a>
      <div id="button-box">
          <button class="tab-button" id="link-read">Read</button>
        <button class="tab-button" id="link-delete">Delete</button>
      </div>
    </article>`);
}

function countRead (){
  var $readLength = $('.read').length;
  $('.links-read').text("Links Read: " + $readLength);
}

function countTotal() {
  var $totalCards = $('.link-tab').length;
  $('.link-count').text($totalCards);
}
