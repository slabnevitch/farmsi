const enterModal = new bootstrap.Modal($("#enterModal"), {});
const enterPreloaderModal = new bootstrap.Modal($("#enterPreloaderModal"), {});
const passwordModal = new bootstrap.Modal($("#passwordModal"), {});
const passwordFullModal = new bootstrap.Modal($("#passwordFullModal"), {});
const passwordErrorModal = new bootstrap.Modal($("#passwordErrorModal"), {});

$("#enterModal, #passwordModal").on('shown.bs.modal', function () {

	console.log($(this));
	console.log($(this).find('input').eq(0));

  $(this).find('input').eq(0).focus();
  console.log($(this).find('input').eq(0).is(":focus"));
$('input').each((i,item) => console.log($(item).is(":focus")));
});

// $("#enterModal, #enterPreloaderModal, #passwordModal, #passwordFullModal").on('hide.bs.modal', function () {


//   $(this).find('input').eq(0).blur();

// });
passwordErrorModal.show();
document.getElementById('open').onclick = () => enterModal.show();
document.getElementById('close').onclick = () => enterModal.hide();