// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class

// $(document).on('click', function(e) {
	// var $target = $(e.target);
// });// $(document).on('click')

	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

// (function() {
	// ibg class
	// if('objectFit' in document.documentElement.style === false){
	//   Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	//     var image = el.querySelector('img');
	//     el.style.backgroundImage = 'url("'+image.src+'")';
	//     el.classList.add('ibg');
	//     el.classList.remove('_fit');
	// 	 });
	// }
	// End ibg class

	// document.addEventListener('DOMContentLoaded', function() {
		const enterModal = new bootstrap.Modal($("#enterModal"), {});
const enterPreloaderModal = new bootstrap.Modal($("#enterPreloaderModal"), {});
const passwordModal = new bootstrap.Modal($("#passwordModal"), {});
const passwordFullModal = new bootstrap.Modal($("#passwordFullModal"), {});
const passwordErrorModal = new bootstrap.Modal($("#passwordErrorModal"), {});

const regModalEmail = new bootstrap.Modal($("#regModalEmail"), {});
const regModalPhone = new bootstrap.Modal($("#regModalPhone"), {});
const regModalPhoneFull = new bootstrap.Modal($("#regModalPhoneFull"), {});
const enterRegModalEmail = new bootstrap.Modal($("#enterRegModalEmail"), {});
const enterRegModalPhone = new bootstrap.Modal($("#enterRegModalPhone"), {});
const passRepairModalEmail = new bootstrap.Modal($("#passRepairModalEmail"), {});
const passRepairModalPhone = new bootstrap.Modal($("#passRepairModalPhone"), {});
const regErrorModal = new bootstrap.Modal($("#regErrorModal"), {});

const repairDefaultModal = new bootstrap.Modal($("#repairDefaultModal"), {});
const repairEmailModal = new bootstrap.Modal($("#repairEmailModal"), {});
const repairSuccessModal = new bootstrap.Modal($("#repairSuccessModal"), {});

$("#enterModal, #passwordModal, #regModalEmail").on('shown.bs.modal', function () {
  $(this).find('input').eq(0).focus();
});

// enterModal.show();
// enterPreloaderModal.show();
// passwordModal.show();
// passwordFullModal.show();
// passwordErrorModal.show();
// regModalEmail.show();
// regModalPhone.show();
// regModalPhoneFull.show();
// enterRegModalEmail.show();
// enterRegModalPhone.show();
// passRepairModalEmail.show();
// passRepairModalPhone.show();
// regErrorModal.show();
// repairDefaultModal.show();
// repairEmailModal .show();
// repairSuccessModal.show();

		
		

		

		// password show
			if(document.querySelector('.eye-ico') !== null){
				[].forEach.call(document.querySelectorAll('.eye-ico'), function(el){
					el.onclick = function(e) {
						var passInput = this.closest('.enter-modal__group').querySelector('.enter-modal__input');
						// passInput.focus();
						this.classList.toggle('unblind');
						passInput.getAttribute('type') === 'password' ?
						passInput.setAttribute('type','text') :
						passInput.setAttribute('type','password');
					}
				});
			}
		// END password show
	// });
// })();