var $ = jQuery.noConflict();

$(document).ready(function() {

    // Максимальное количество загружаемых изображений за одни раз
    var maxFiles = 8;

    // Оповещение по умолчанию
    var errMessage = 0;

    // Кнопка выбора файлов
    var defaultUploadBtn = $('.uploadbtn0');

    // Массив для всех изображений
    var dataArray = [];

    // Область информер о загруженных изображениях - скрыта
    // $('.uploaded-files'+count).hide();

    // При нажатии на кнопку выбора файлов
    defaultUploadBtn.on('change', function() {
        // Заполняем массив выбранными изображениями
        var files = $(this)[0].files;
        // Проверяем на максимальное количество файлов
        if (files.length <= maxFiles) {
            // Передаем массив с файлами в функцию загрузки на предпросмотр
            loadInView(files);
            // Очищаем инпут файл путем сброса формы
            $('.frm0').each(function(){
                $('.uploadbtn0').val('');
            });
        } else {
            alert('Вы не можете загружать больше '+maxFiles+' изображений!');
            files.length = 0;
        }
    });
    // Функция загрузки изображений на предросмотр
    function loadInView(files) {
        // Показываем обасть предпросмотра
        $('.uploaded-holder0').show();

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
                $('.upload-button0').css({'display' : 'block'});
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
            if($('.dropped-files0 > .image').length <= maxFiles) {
                $('.dropped-files0').append('' +
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
    $(".dropped-files0").on("click","a[id^='drop']", function(e) {
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
            $('.dropped-files0 > .image' ).remove();
            // Обновляем эскизи в соответсвии с обновленным массивом
            addImage(-1);
            $(this).removeClass('ad');
        }

        $(this).find('.yes-tool').click(toolTip);
        function toolTip() {
            $(this).addClass('ad');

        }
        $(this).find('.no-tool').click(toolTipNo);
        function toolTipNo() {
            $(this).find('.open-tooltip').slideToggle();
        }
    });







});

//2

$(document).ready(function() {

    // Максимальное количество загружаемых изображений за одни раз
    var maxFiles2 = 8;

    // Оповещение по умолчанию
    var errMessage2 = 0;

    // Кнопка выбора файлов
    var defaultUploadBtn2 = $('.uploadbtn1');

    // Массив для всех изображений
    var dataArray2 = [];

    // Область информер о загруженных изображениях - скрыта
    // $('.uploaded-files'+count).hide();

    // При нажатии на кнопку выбора файлов
    defaultUploadBtn2.on('change', function() {
        // Заполняем массив выбранными изображениями
        var files2 = $(this)[0].files;
        // Проверяем на максимальное количество файлов
        if (files2.length <= maxFiles2) {
            // Передаем массив с файлами в функцию загрузки на предпросмотр
            loadInView(files2);
            // Очищаем инпут файл путем сброса формы
            $('.frm1').each(function(){
                $('.uploadbtn1').val('');
            });
        } else {
            alert('Вы не можете загружать больше '+maxFiles2+' изображений!');
            files2.length = 0;
        }
    });

    // Функция загрузки изображений на предросмотр
    function loadInView(files2) {
        // Показываем обасть предпросмотра
        $('.uploaded-holder1').show();

        // Для каждого файла
        $.each(files2, function(index, file) {

            // Несколько оповещений при попытке загрузить не изображение
            if (!files2[index].type.match('image.*')) {

                if(errMessage2 == 0) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage2
                }
                else if(errMessage2 == 1) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage2
                }
                else if(errMessage2 == 2) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    ++errMessage2
                }
                else if(errMessage2 == 3) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    errMessage2 = 0;
                }
                return false;
            }

            // Проверяем количество загружаемых элементов
            if((dataArray2.length+files2.length) <= maxFiles2) {
                // показываем область с кнопками
                $('.upload-button1').css({'display' : 'block'});
            }
            else { alert('Вы не можете загружать больше '+maxFiles2+' изображений!'); return; }

            // Создаем новый экземпляра FileReader
            var fileReader2 = new FileReader();
            // Инициируем функцию FileReader
            fileReader2.onload = (function(file) {

                return function(e) {
                    // Помещаем URI изображения в массив
                    dataArray2.push({name : file.name, value : this.result});
                    addImage((dataArray2.length-1));
                };

            })(files2[index]);
            // Производим чтение картинки по URI
            fileReader2.readAsDataURL(file);
        });
        return false;
    }

    // Процедура добавления эскизов на страницу
    function addImage(ind) {
        // Если индекс отрицательный значит выводим весь массив изображений
        if (ind < 0 ) {
            start = 0; end = dataArray2.length;
        } else {
            // иначе только определенное изображение
            start = ind; end = ind+1; }

        // Цикл для каждого элемента массива
        for (i = start; i < end; i++) {
            // размещаем загруженные изображения
            if($('.dropped-files1 > .image').length <= maxFiles2) {
                $('.dropped-files1').append('' +
                    '<div id="img-'+i+'" class="image" style="background: url('+dataArray2[i].value+'); background-size: cover;">' +
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
    $(".dropped-files1").on("click","a[id^='drop']", function(e) {
        e.preventDefault();
        $(this).find($('.open-tooltip')).slideToggle();
        // получаем название id
        var elid2 = $(this).attr('id');
        // создаем массив для разделенных строк
        var temp2 = new Array();
        // делим строку id на 2 части
        // Удаляем старые эскизы
        if( $('.yes-tool').hasClass('ad')){
            temp2 = elid2.split('-');
            // получаем значение после тире тоесть индекс изображения в массиве
            dataArray2.splice(temp2[1],1);
            $('.dropped-files1 > .image' ).remove();
            // Обновляем эскизи в соответсвии с обновленным массивом
            addImage(-1);
            $(this).removeClass('ad');
        }
        $(this).find('.yes-tool').click(toolTip);
        function toolTip() {
            $(this).addClass('ad');
        }
        $(this).find('.no-tool').click(toolTipNo);
        function toolTipNo() {
            $(this).find('.open-tooltip').slideToggle();
        }
    });







});

//3
$(document).ready(function() {

    // Максимальное количество загружаемых изображений за одни раз
    var maxFiles3 = 12;

    // Оповещение по умолчанию
    var errMessage3 = 0;

    // Кнопка выбора файлов
    var defaultUploadBtn3 = $('.uploadbtn2');

    // Массив для всех изображений
    var dataArray3 = [];

    // Область информер о загруженных изображениях - скрыта
    // $('.uploaded-files'+count).hide();

    // При нажатии на кнопку выбора файлов
    defaultUploadBtn3.on('change', function() {
        // Заполняем массив выбранными изображениями
        var files3 = $(this)[0].files;
        // Проверяем на максимальное количество файлов
        if (files3.length <= maxFiles3) {
            // Передаем массив с файлами в функцию загрузки на предпросмотр
            loadInView(files3);
            // Очищаем инпут файл путем сброса формы
            $('.frm2').each(function(){
                $('.uploadbtn2').val('');
            });
        } else {
            alert('Вы не можете загружать больше '+maxFiles3+' изображений!');
            files3.length = 0;
        }
    });

    // Функция загрузки изображений на предросмотр
    function loadInView(files3) {
        // Показываем обасть предпросмотра
        $('.uploaded-holder2').show();

        // Для каждого файла
        $.each(files3, function(index, file) {

            // Несколько оповещений при попытке загрузить не изображение
            if (!files3[index].type.match('image.*')) {

                if(errMessage3 == 0) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage3
                }
                else if(errMessage3 == 1) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage3
                }
                else if(errMessage3 == 2) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    ++errMessage3
                }
                else if(errMessage3 == 3) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    errMessage3 = 0;
                }
                return false;
            }

            // Проверяем количество загружаемых элементов
            if((dataArray3.length+files3.length) <= maxFiles3) {
                // показываем область с кнопками
                $('.upload-button2').css({'display' : 'block'});
            }
            else { alert('Вы не можете загружать больше '+maxFiles3+' изображений!'); return; }

            // Создаем новый экземпляра FileReader
            var fileReader3 = new FileReader();
            // Инициируем функцию FileReader
            fileReader3.onload = (function(file) {

                return function(e) {
                    // Помещаем URI изображения в массив
                    dataArray3.push({name : file.name, value : this.result});
                    addImage((dataArray3.length-1));
                };

            })(files3[index]);
            // Производим чтение картинки по URI
            fileReader3.readAsDataURL(file);
        });
        return false;
    }

    // Процедура добавления эскизов на страницу
    function addImage(ind) {
        // Если индекс отрицательный значит выводим весь массив изображений
        if (ind < 0 ) {
            start = 0; end = dataArray3.length;
        } else {
            // иначе только определенное изображение
            start = ind; end = ind+1; }

        // Цикл для каждого элемента массива
        for (i = start; i < end; i++) {
            // размещаем загруженные изображения
            if($('.dropped-files2 > .image').length <= maxFiles3) {
                $('.dropped-files2').append('' +
                    '<div id="img-'+i+'" class="image" style="background: url('+dataArray3[i].value+'); background-size: cover;">' +
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
    $(".dropped-files2").on("click","a[id^='drop']", function(e) {
        e.preventDefault();
        $(this).find($('.open-tooltip')).slideToggle();
        // получаем название id
        var elid3 = $(this).attr('id');
        // создаем массив для разделенных строк
        var temp3 = new Array();
        // делим строку id на 2 части
        // Удаляем старые эскизы
        if( $('.yes-tool').hasClass('ad')){
            temp3 = elid3.split('-');
            // получаем значение после тире тоесть индекс изображения в массиве
            dataArray3.splice(temp3[1],1);
            $('.dropped-files2 > .image' ).remove();
            // Обновляем эскизи в соответсвии с обновленным массивом
            addImage(-1);
            $(this).removeClass('ad');
        }
        $(this).find('.yes-tool').click(toolTip);
        function toolTip() {
            $(this).addClass('ad');
        }
        $(this).find('.no-tool').click(toolTipNo);
        function toolTipNo() {
            $(this).find('.open-tooltip').slideToggle();
        }
    });

});

//4
$(document).ready(function() {

    // Максимальное количество загружаемых изображений за одни раз
    var maxFiles4 = 8;

    // Оповещение по умолчанию
    var errMessage4 = 0;

    // Кнопка выбора файлов
    var defaultUploadBtn4 = $('.uploadbtn3');

    // Массив для всех изображений
    var dataArray4 = [];

    // Область информер о загруженных изображениях - скрыта
    // $('.uploaded-files'+count).hide();

    // При нажатии на кнопку выбора файлов
    defaultUploadBtn4.on('change', function() {
        // Заполняем массив выбранными изображениями
        var files4 = $(this)[0].files;
        // Проверяем на максимальное количество файлов
        if (files4.length <= maxFiles4) {
            // Передаем массив с файлами в функцию загрузки на предпросмотр
            loadInView(files4);
            // Очищаем инпут файл путем сброса формы
            $('.frm3').each(function(){
                $('.uploadbtn3').val('');
            });
        } else {
            alert('Вы не можете загружать больше '+maxFiles4+' изображений!');
            files4.length = 0;
        }
    });

    // Функция загрузки изображений на предросмотр
    function loadInView(files4) {
        // Показываем обасть предпросмотра
        $('.uploaded-holder3').show();

        // Для каждого файла
        $.each(files4, function(index, file) {

            // Несколько оповещений при попытке загрузить не изображение
            if (!files4[index].type.match('image.*')) {

                if(errMessage4 == 0) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage4
                }
                else if(errMessage4 == 1) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage4
                }
                else if(errMessage4 == 2) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    ++errMessage4
                }
                else if(errMessage4 == 3) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    errMessage4 = 0;
                }
                return false;
            }

            // Проверяем количество загружаемых элементов
            if((dataArray4.length+files4.length) <= maxFiles4) {
                // показываем область с кнопками
                $('.upload-button3').css({'display' : 'block'});
            }
            else { alert('Вы не можете загружать больше '+maxFiles4+' изображений!'); return; }

            // Создаем новый экземпляра FileReader
            var fileReader4 = new FileReader();
            // Инициируем функцию FileReader
            fileReader4.onload = (function(file) {

                return function(e) {
                    // Помещаем URI изображения в массив
                    dataArray4.push({name : file.name, value : this.result});
                    addImage((dataArray4.length-1));
                };

            })(files4[index]);
            // Производим чтение картинки по URI
            fileReader4.readAsDataURL(file);
        });
        return false;
    }

    // Процедура добавления эскизов на страницу
    function addImage(ind) {
        // Если индекс отрицательный значит выводим весь массив изображений
        if (ind < 0 ) {
            start = 0; end = dataArray4.length;
        } else {
            // иначе только определенное изображение
            start = ind; end = ind+1; }

        // Цикл для каждого элемента массива
        for (i = start; i < end; i++) {
            // размещаем загруженные изображения
            if($('.dropped-files3 > .image').length <= maxFiles4) {
                $('.dropped-files3').append('' +
                    '<div id="img-'+i+'" class="image" style="background: url('+dataArray4[i].value+'); background-size: cover;">' +
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
    $(".dropped-files3").on("click","a[id^='drop']", function(e) {
        e.preventDefault();
        $(this).find($('.open-tooltip')).slideToggle();
        // получаем название id
        var elid4 = $(this).attr('id');
        // создаем массив для разделенных строк
        var temp4 = new Array();
        // делим строку id на 2 части
        // Удаляем старые эскизы
        if( $('.yes-tool').hasClass('ad')){
            temp4 = elid4.split('-');
            // получаем значение после тире тоесть индекс изображения в массиве
            dataArray4.splice(temp4[1],1);
            $('.dropped-files3 > .image' ).remove();
            // Обновляем эскизи в соответсвии с обновленным массивом
            addImage(-1);
            $(this).removeClass('ad');
        }
        $(this).find('.yes-tool').click(toolTip);
        function toolTip() {
            $(this).addClass('ad');

        }
        $(this).find('.no-tool').click(toolTipNo);
        function toolTipNo() {
            $(this).find('.open-tooltip').slideToggle();
        }
    });
});

//5
$(document).ready(function() {

    // Максимальное количество загружаемых изображений за одни раз
    var maxFiles5 = 8;

    // Оповещение по умолчанию
    var errMessage5 = 0;

    // Кнопка выбора файлов
    var defaultUploadBtn5 = $('.uploadbtn4');

    // Массив для всех изображений
    var dataArray5 = [];

    // Область информер о загруженных изображениях - скрыта
    // $('.uploaded-files'+count).hide();

    // При нажатии на кнопку выбора файлов
    defaultUploadBtn5.on('change', function() {
        // Заполняем массив выбранными изображениями
        var files5 = $(this)[0].files;
        // Проверяем на максимальное количество файлов
        if (files5.length <= maxFiles5) {
            // Передаем массив с файлами в функцию загрузки на предпросмотр
            loadInView(files5);
            // Очищаем инпут файл путем сброса формы
            $('.frm4').each(function(){
                $('.uploadbtn4').val('');
            });
        } else {
            alert('Вы не можете загружать больше '+maxFiles5+' изображений!');
            files5.length = 0;
        }
    });

    // Функция загрузки изображений на предросмотр
    function loadInView(files5) {
        // Показываем обасть предпросмотра
        $('.uploaded-holder4').show();

        // Для каждого файла
        $.each(files5, function(index, file) {

            // Несколько оповещений при попытке загрузить не изображение
            if (!files5[index].type.match('image.*')) {

                if(errMessage5 == 0) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage5
                }
                else if(errMessage5 == 1) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage5
                }
                else if(errMessage5 == 2) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    ++errMessage5
                }
                else if(errMessage5 == 3) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    errMessage5 = 0;
                }
                return false;
            }

            // Проверяем количество загружаемых элементов
            if((dataArray5.length+files5.length) <= maxFiles5) {
                // показываем область с кнопками
                $('.upload-button4').css({'display' : 'block'});
            }
            else { alert('Вы не можете загружать больше '+maxFiles5+' изображений!'); return; }

            // Создаем новый экземпляра FileReader
            var fileReader5 = new FileReader();
            // Инициируем функцию FileReader
            fileReader5.onload = (function(file) {

                return function(e) {
                    // Помещаем URI изображения в массив
                    dataArray5.push({name : file.name, value : this.result});
                    addImage((dataArray5.length-1));
                };

            })(files5[index]);
            // Производим чтение картинки по URI
            fileReader5.readAsDataURL(file);
        });
        return false;
    }

    // Процедура добавления эскизов на страницу
    function addImage(ind) {
        // Если индекс отрицательный значит выводим весь массив изображений
        if (ind < 0 ) {
            start = 0; end = dataArray5.length;
        } else {
            // иначе только определенное изображение
            start = ind; end = ind+1; }

        // Цикл для каждого элемента массива
        for (i = start; i < end; i++) {
            // размещаем загруженные изображения
            if($('.dropped-files4 > .image').length <= maxFiles5) {
                $('.dropped-files4').append('' +
                    '<div id="img-'+i+'" class="image" style="background: url('+dataArray5[i].value+'); background-size: cover;">' +
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
    $(".dropped-files4").on("click","a[id^='drop']", function(e) {
        e.preventDefault();
        $(this).find($('.open-tooltip')).slideToggle();
        // получаем название id
        var elid5 = $(this).attr('id');
        // создаем массив для разделенных строк
        var temp5 = new Array();
        // делим строку id на 2 части
        // Удаляем старые эскизы
        if( $('.yes-tool').hasClass('ad')){
            temp5 = elid5.split('-');
            // получаем значение после тире тоесть индекс изображения в массиве
            dataArray5.splice(temp5[1],1);
            $('.dropped-files4 > .image' ).remove();
            // Обновляем эскизи в соответсвии с обновленным массивом
            addImage(-1);
            $(this).removeClass('ad');
        }
        $(this).find('.yes-tool').click(toolTip);
        function toolTip() {
            $(this).addClass('ad');

        }
        $(this).find('.no-tool').click(toolTipNo);
        function toolTipNo() {
            $(this).find('.open-tooltip').slideToggle();
        }
    });
});

//6
$(document).ready(function() {

    // Максимальное количество загружаемых изображений за одни раз
    var maxFiles6 = 8;

    // Оповещение по умолчанию
    var errMessage6 = 0;

    // Кнопка выбора файлов
    var defaultUploadBtn6 = $('.uploadbtn5');

    // Массив для всех изображений
    var dataArray6 = [];

    // Область информер о загруженных изображениях - скрыта
    // $('.uploaded-files'+count).hide();

    // При нажатии на кнопку выбора файлов
    defaultUploadBtn6.on('change', function() {
        // Заполняем массив выбранными изображениями
        var files6 = $(this)[0].files;
        // Проверяем на максимальное количество файлов
        if (files6.length <= maxFiles6) {
            // Передаем массив с файлами в функцию загрузки на предпросмотр
            loadInView(files6);
            // Очищаем инпут файл путем сброса формы
            $('.frm5').each(function(){
                $('.uploadbtn5').val('');
            });
        } else {
            // alert('Вы не можете загружать больше '+maxFiles6+' изображений!');
            $(this).prop( "disabled", true );
            files6.length = 0;
        }
    });

    // Функция загрузки изображений на предросмотр
    function loadInView(files6) {
        // Показываем обасть предпросмотра
        $('.uploaded-holder5').show();

        // Для каждого файла
        $.each(files6, function(index, file) {

            // Несколько оповещений при попытке загрузить не изображение
            if (!files6[index].type.match('image.*')) {

                if(errMessage6 == 0) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage6
                }
                else if(errMessage6 == 1) {
                    $('.drop-files p').html('Можно загружать только изображения!');
                    ++errMessage6
                }
                else if(errMessage6 == 2) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    ++errMessage6
                }
                else if(errMessage6 == 3) {
                    $('.drop-files p').html("Можно загружать только изображения!");
                    errMessage6 = 0;
                }
                return false;
            }

            // Проверяем количество загружаемых элементов
            if((dataArray6.length+files6.length) <= maxFiles6) {
                // показываем область с кнопками
                $('.upload-button5').css({'display' : 'block'});
            }
            else { alert('Вы не можете загружать больше '+maxFiles6+' изображений!'); return; }

            // Создаем новый экземпляра FileReader
            var fileReader6 = new FileReader();
            // Инициируем функцию FileReader
            fileReader6.onload = (function(file) {

                return function(e) {
                    // Помещаем URI изображения в массив
                    dataArray6.push({name : file.name, value : this.result});
                    addImage((dataArray6.length-1));
                };

            })(files6[index]);
            // Производим чтение картинки по URI
            fileReader6.readAsDataURL(file);
        });
        return false;
    }

    // Процедура добавления эскизов на страницу
    function addImage(ind) {
        // Если индекс отрицательный значит выводим весь массив изображений
        if (ind < 0 ) {
            start = 0; end = dataArray6.length;
        } else {
            // иначе только определенное изображение
            start = ind; end = ind+1; }

        // Цикл для каждого элемента массива
        for (i = start; i < end; i++) {
            // размещаем загруженные изображения
            if($('.dropped-files5 > .image').length <= maxFiles6) {
                $('.dropped-files5').append('' +
                    '<div id="img-'+i+'" class="image" style="background: url('+dataArray6[i].value+'); background-size: cover;">' +
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
    $(".dropped-files5").on("click","a[id^='drop']", function(e) {
        e.preventDefault();
        $(this).find($('.open-tooltip')).slideToggle();
        // получаем название id
        var elid6 = $(this).attr('id');
        // создаем массив для разделенных строк
        var temp6 = new Array();
        // делим строку id на 2 части
        // Удаляем старые эскизы
        if( $('.yes-tool').hasClass('ad')){
            temp6 = elid6.split('-');
            // получаем значение после тире тоесть индекс изображения в массиве
            dataArray6.splice(temp6[1],1);
            $('.dropped-files5 > .image' ).remove();
            // Обновляем эскизи в соответсвии с обновленным массивом
            addImage(-1);
            $(this).removeClass('ad');
        }
        $(this).find('.yes-tool').click(toolTip);
        function toolTip() {
            $(this).addClass('ad');

        }
        $(this).find('.no-tool').click(toolTipNo);
        function toolTipNo() {
            $(this).find('.open-tooltip').slideToggle();
        }
    });

});




