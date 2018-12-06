var initTable = function(rows, columns, tableClass = null) {

    if (tableClass) {
        if (confirm('Borrara lo dibujado hasta el momento. ¿Continuar?')) {
            var table = document.getElementById('pixelart_table');

            var tableContent = '';

            for (var row = 0; row < rows; row++) {
                tableContent += '<tr>';
                for (var column = 0; column < columns; column++) {
                    if (tableClass)
                        tableContent += '<td class="' + tableClass + '" id="' + row + 'x' + column + '" onclick="pixelize(event)"></td>';
                    else
                        tableContent += '<td class="small" id="' + row + 'x' + column + '" onclick="pixelize(event)"></td>';
                }
                tableContent += '</tr>';
            }

            table.innerHTML = tableContent;
        }
    } else {
        var table = document.getElementById('pixelart_table');

        var tableContent = '';

        for (var row = 0; row < rows; row++) {
            tableContent += '<tr>';
            for (var column = 0; column < columns; column++) {
                if (tableClass)
                    tableContent += '<td class="' + tableClass + '" id="' + row + 'x' + column + '" onclick="pixelize(event)"></td>';
                else
                    tableContent += '<td class="medium" id="' + row + 'x' + column + '" onclick="pixelize(event)"></td>';
            }
            tableContent += '</tr>';
        }

        table.innerHTML = tableContent;
    }
    
}




var makeCellsBigger = function() {
    var table = document.getElementById('pixelart_table');

    console.log(table);

    for (var row = 0; row < table.rows.length; row++) {
        for (var cell = 0; cell < table.rows[row].cells.length; row++) {
            var cell = table.rows[row].cells.item(cell);
            if (cell.classList.contains('small')) {
                cell.classList.remove('small');
                cell.classList.add('medium');
            } else if (cell.classList.contains('medium')) {
                cell.classList.remove('medium');
                cell.classList.add('big');
            }
        }
    }
}

var makeCellsSmaller = function() {
    var table = document.getElementById('pixelart_table');

    for (var row = 0; row < table.rows.length; row++) {
        for (var cell = 0; cell < table.rows[row].cells.length; row++) {
            var cell = table.rows[row].cells.item(cell);
            if (cell.classList.contains('big')) {
                cell.classList.remove('big');
                cell.classList.add('medium');
            } else if (cell.classList.contains('medium')) {
                cell.classList.remove('medium');
                cell.classList.add('small');
            }
        }
    }
}

var color = 'black';

/* Colorizing */
/**************/
var setColorRed = function() {
    var sayColor = document.getElementById('colornow');
    var btnRed = document.getElementById('btnRed');
    var btnBlack = document.getElementById('btnBlack');
    var btnBlue = document.getElementById('btnBlue');
    var btnGreen = document.getElementById('btnGreen');
    sayColor.classList.remove('black');
    sayColor.classList.remove('red');
    sayColor.classList.remove('green');
    sayColor.classList.remove('blue');
    color = 'red';
    sayColor.classList.add('red');
    btnRed.classList.add('active');
    btnBlack.classList.remove('active');
    btnBlue.classList.remove('active');
    btnGreen.classList.remove('active');
}
var setColorGreen = function() {
    var sayColor = document.getElementById('colornow');
    var btnRed = document.getElementById('btnRed');
    var btnBlack = document.getElementById('btnBlack');
    var btnBlue = document.getElementById('btnBlue');
    var btnGreen = document.getElementById('btnGreen');
    sayColor.classList.remove('black');
    sayColor.classList.remove('red');
    sayColor.classList.remove('green');
    sayColor.classList.remove('blue');
    color = 'green';
    sayColor.classList.add('green');
    btnGreen.classList.add('active');
    btnBlack.classList.remove('active');
    btnBlue.classList.remove('active');
    btnRed.classList.remove('active');
}
var setColorBlue = function() {
    var sayColor = document.getElementById('colornow');
    var btnRed = document.getElementById('btnRed');
    var btnBlack = document.getElementById('btnBlack');
    var btnBlue = document.getElementById('btnBlue');
    var btnGreen = document.getElementById('btnGreen');
    sayColor.classList.remove('black');
    sayColor.classList.remove('red');
    sayColor.classList.remove('green');
    sayColor.classList.remove('blue');
    color = 'blue';
    sayColor.classList.add('blue');
    btnBlue.classList.add('active');
    btnBlack.classList.remove('active');
    btnGreen.classList.remove('active');
    btnRed.classList.remove('active');
}
var setColorBlack = function() {
    var sayColor = document.getElementById('colornow');
    var btnRed = document.getElementById('btnRed');
    var btnBlack = document.getElementById('btnBlack');
    var btnBlue = document.getElementById('btnBlue');
    var btnGreen = document.getElementById('btnGreen');
    sayColor.classList.remove('black');
    sayColor.classList.remove('red');
    sayColor.classList.remove('green');
    sayColor.classList.remove('blue');
    color = 'black';
    sayColor.classList.add('black');
    btnBlack.classList.add('active');
    btnBlue.classList.remove('active');
    btnGreen.classList.remove('active');
    btnRed.classList.remove('active');
}

var pixelize = function(event) {
    var cell = event.path[0];
    
    if (cell.classList.contains('pixelized-black'))
        cell.classList.remove('pixelized-black');
    else if (cell.classList.contains('pixelized-red'))
        cell.classList.remove('pixelized-red');
    else if (cell.classList.contains('pixelized-green'))
        cell.classList.remove('pixelized-green');
    else if (cell.classList.contains('pixelized-blue'))
        cell.classList.remove('pixelized-blue');
    else {
        if (color == 'black')
            cell.classList.add('pixelized-black');
        else if (color == 'red')
            cell.classList.add('pixelized-red');
        else if (color == 'green')
            cell.classList.add('pixelized-green');
        else if (color == 'blue')
            cell.classList.add('pixelized-blue');
    }
        
}



window.addEventListener('load', function() {
    initTable(80, 100);
})