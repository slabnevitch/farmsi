const regModalEmail = new bootstrap.Modal($("#regModalEmail"), {});
const regModalPhone = new bootstrap.Modal($("#regModalPhone"), {});
const enterRegModalEmail = new bootstrap.Modal($("#enterRegModalEmail"), {});
const enterRegModalPhone = new bootstrap.Modal($("#enterRegModalPhone"), {});
const passRepairModalEmail = new bootstrap.Modal($("#passRepairModalEmail"), {});
const passRepairModalPhone = new bootstrap.Modal($("#passRepairModalPhone"), {});
const regErrorModal = new bootstrap.Modal($("#regErrorModal"), {});

// $("#regModalEmail, #regModalPhone, #enterRegModalEmail, #enterRegModalPhone").on('shown.bs.modal', function () {

// 	console.log( $(this));
//   $(this).find('input').eq(0).focus();
// });

passRepairModalPhone.show();