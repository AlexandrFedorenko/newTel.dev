var $ = jQuery.noConflict();

$(document).ready(function() {

    // Максимальное количество загружаемых изображений за одни раз
    var maxFiles = 8;

    // Оповещение по умолчанию
    var errMessage = 0;

    // Кнопка выбора файлов
    var defaultUploadBtn = $('.uploadbtn');

    // Массив для всех изображений
    var dataArray = [];

    // Область информер о загруженных изображениях - скрыта
    // $('.uploaded-files'+count).hide();

    // При нажатии на кнопку выбора файлов
    defaultUploadBtn.on('change', function() {
        count =  $(this).attr('data-attr');
        // Заполняем массив выбранными изображениями
        var files = $(this)[0].files;
        // Проверяем на максимальное количество файлов
        if (files.length <= maxFiles) {
            // Передаем массив с файлами в функцию загрузки на предпросмотр
            loadInView(files);
            // Очищаем инпут файл путем сброса формы
            $('.frm'+count).each(function(){
                this.reset();
            });
        } else {
            alert('Вы не можете загружать больше '+maxFiles+' изображений!');
            files.length = 0;
        }
    });

    // Функция загрузки изображений на предросмотр
    function loadInView(files) {
        // Показываем обасть предпросмотра
        $('.uploaded-holder'+count).show();

        // Для каждого файла
        $.each(files, function(index, file) {

            // Несколько оповещений при попытке загрузить не изображение
            if (!files[index].type.match('image.*')) {

                if(errMessage == 0) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage
                }
                else if(errMessage == 1) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage
                }
                else if(errMessage == 2) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    ++errMessage
                }
                else if(errMessage == 3) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    errMessage = 0;
                }
                return false;
            }

            // Проверяем количество загружаемых элементов
            if((dataArray.length+files.length) <= maxFiles) {
                // показываем область с кнопками
                $('.upload-button' +count).css({'display' : 'block'});
            }
            else { alert('Вы не можете загружать больше '+maxFiles+' изображений!'); return; }

            // Создаем новый экземпляра FileReader
            var fileReader = new FileReader();
            // Инициируем функцию FileReader
            fileReader.onload = (function(file) {

                return function(e) {
                    // Помещаем URI изображения в массив
                    dataArray.push({name : file.name, value : this.result});
                    addImage((dataArray.length-1));
                };

            })(files[index]);
            // Производим чтение картинки по URI
            fileReader.readAsDataURL(file);
        });
        return false;
    }

    // Процедура добавления эскизов на страницу
    function addImage(ind) {
        // Если индекс отрицательный значит выводим весь массив изображений
        if (ind < 0 ) {
            start = 0; end = dataArray.length;
        } else {
            // иначе только определенное изображение
            start = ind; end = ind+1; }

        // Цикл для каждого элемента массива
        for (i = start; i < end; i++) {
            // размещаем загруженные изображения
            if($('.dropped-files'+count+' > .image').length <= maxFiles) {
                $('.dropped-files'+count).append('' +
                    '<div id="img-'+i+'" class="image" style="background: url('+dataArray[i].value+'); background-size: cover;">' +
                    '<a href="#" id="drop-'+i+'" class="drop-button">' +
                    '<div class="open-tooltip"><div class="tooltip-files">' +
                    '<p class="tooltip-files_title">Вы действительно хотите удалить изображение?</p>' +
                    '<div class="wrap-btn-files-tooltip">' +
                    '<button class=" bt-tool yes-tool">Да</button>' +
                    '<button class=" bt-tool no-tool">Нет</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    ' </a>' +
                    '</div>');
            }
        }
        return false;
    }
    // // Удаление только выбранного изображения
    $(".dropped-files").on("click","a[id^='drop']", function(e) {
        e.preventDefault();
        $(this).find($('.open-tooltip')).slideToggle();
     // получаем название id
        var elid = $(this).attr('id');
        // создаем массив для разделенных строк
        var temp = new Array();
        // делим строку id на 2 части
        // Удаляем старые эскизы
        if( $('.yes-tool').hasClass('ad')){
            temp = elid.split('-');
            // получаем значение после тире тоесть индекс изображения в массиве
            dataArray.splice(temp[1],1);
            $('.dropped-files'+count+' > .image' ).remove();
            // Обновляем эскизи в соответсвии с обновленным массивом
            addImage(-1);
        }
        $(this).find('.yes-tool').click(toolTip);
        function toolTip(e) {
            $(this).addClass('ad');

        }
        $('.yes-tool').click(toolTipNo);
        function toolTipNo(e) {
            e.preventDefault();
            $('.open-tooltip').slideToggle();
        }
    });







});





