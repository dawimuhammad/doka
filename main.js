// function vehicle data input on submit/ on onclick

var countData = 0;
var lastKilometres = 0;
var lastOilChangeKM = 0;
var vehicleBook = [];

function  vehicleFormSubmit() {
    var emptyField = checkEmpty();

    if (emptyField === true) {
        alert('Field tidak boleh ada yang kosong');
    } else {

        var logData = [];

        var vehicle = document.getElementById('vehicle-data-form');

        var logDate = vehicle.elements[0].value;
        var logKilo = parseInt(vehicle.elements[1].value);
        var logServiceType = vehicle.elements[2].value;

        logData.push(logDate);
        logData.push(logKilo);
        logData.push(logServiceType);

        var tanggalString = dateChange(logDate);

        var serviceTypeString = serviceTypeChange(logServiceType);

        if (logKilo > lastKilometres) {
            lastKilometres = logKilo;
        }

        var changeKilometre = document.getElementById('vehicle-last-kilometre');

        changeKilometre.innerHTML = lastKilometres + ' KM';

        // last oilchange check

        var lastOilChange = document.getElementById('vehicle-last-oilchange');

        if (logServiceType === 'change-oil' && logKilo > lastOilChangeKM) {
            lastOilChange = tanggalString;
        }


        // lastOilChange.innerHTML =

        countData += 1;

        var table = document.getElementById('vehicle-table-data');

        var tableLength = table.length;

        var row = table.insertRow(tableLength);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = countData;
        cell2.innerHTML = tanggalString;
        cell3.innerHTML = logKilo;
        cell4.innerHTML = serviceTypeString;

        vehicleBook.push(logData);

        document.getElementById("vehicle-data-form").reset();
    }
}

function vehicleHealth() {


}

function dateChange(tanggal) {
    var splittedTanggal = tanggal.split('-');

    var tanggal = parseInt(splittedTanggal[2]);

    var bulan = parseInt(splittedTanggal[1]);
    var bulanStr = '';

    switch (bulan) {
      case 1 : { bulanStr = 'Januari'; break;}
      case 2 : { bulanStr = 'Februari'; break;}
      case 3 : { bulanStr = 'Maret'; break;}
      case 4 : { bulanStr = 'April'; break;}
      case 5 : { bulanStr = 'Mei'; break;}
      case 6 : { bulanStr = 'Juni'; break;}
      case 7 : { bulanStr = 'Juli'; break;}
      case 8 : { bulanStr = 'Agustus'; break;}
      case 9 : { bulanStr = 'September'; break;}
      case 10 : { bulanStr = 'Oktober'; break;}
      case 11 : { bulanStr = 'November'; break;}
      case 12 : { bulanStr = 'Desember'; break;}
    }

    var tahun = splittedTanggal[0];

    let result = tanggal + ' ' + bulanStr + ' ' + tahun;

    return result;
}

function serviceTypeChange(logServiceType) {
    if (logServiceType === 'service-scheduled') {
        return 'Scheduled Service';
    } else if (logServiceType === 'change-oil') {
        return 'Change Oil';
    } else {
        return 'No Data';
    }
}

function kilometreChange(km) {
  let result = km;
  return result;
}

function checkEmpty() {
  var formCheck = document.getElementById('vehicle-data-form');

  var dateCheck = formCheck.elements[0].value;
  var kiloCheck = formCheck.elements[1].value;
  var typeCheck = formCheck.elements[2].value;

  if (dateCheck.length === 0 || kiloCheck.length === 0 || typeCheck.length === 0) {
      return true;
  } else {
      return false;
  }
}
