$('main.order form .submit').click(function(){
            // убираем все отметки о неправильном заполнении от прошлой проверки, если они есть
            $('.is-invalid').removeClass('is-invalid');
            $('.invalid-feedback').remove();
            let form = document.forms.orderform; // сохраняем форму в переменную
            let valid = true; // поднимаем флаг валидности
            if (!form.name.value) { // если поле не заполнено
                $('form #name').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Укажите имя</div>'); // пишем о неправильном заполнении
                valid = false; // сбрасываем флаг валидности
            }
            // остальные поля аналогично
            if (!form.addr.value) {
                $('form #addr').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Укажите адрес</div>');
                valid = false;
            }
            if (!form.phone.value.match(/^((\+7)|(8))?\s?\(?\d{3}\)?\s?\d{3}\-?\d{2}\-?\d{2}$/)) {
                $('form #phone').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Укажите телефон</div>');
                valid = false;
            }
			if (!form.mail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
				$('form #mail').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Укажите почту</div>');
                valid = false;
            }
			if (!form.date.value) {
                $('form #date').addClass('is-invalid').parents('.mb-3').append('<div class="invalid-feedback">Укажите дату</div>');
                valid = false;
            }
			else {
				return submit
			}