window.onload = (event) => {
    displaycal("2002-11-25")
};

async function displaycal(date) {
    chosen_bank = document.getElementById('banks').value;
    url = "";
    if (chosen_bank == 'Eesti Pank') {
        url = 'https://haldus.eestipank.ee/et/export/currency_rates?imported=' + date + '&type=json';
    }
    if (chosen_bank == 'Leedu Pank') {
        url = 'https://www.lb.lt/fxrates_csv.lb?tp=EU&rs=1&dte=' + date;
    }

    let options = {
        method: 'GET',
        headers: {
            'Content-Type':'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        }
    }

    const res = await fetch(url, options)
        .then(response => response.text());

    const result = res.split(/\r?\n/);
    let rates = [];

    if (chosen_bank == 'Eesti Pank') {
        for (let index = 3; index < result.length-1; index++) {
            line = result[index].split(',');
            rates[line[0]] = line[1];
        }
    }

    if (chosen_bank == 'Leedu Pank') {
        for (let index = 0; index < result.length-1; index++) {
            line = result[index].split(',');
            rates[line[1]] = line[2];
        }
    }


    document.getElementById('currencies').options.length = 0;
    for (var i = document.getElementById("rateTable").rows.length; i > 1; i--) {
        document.getElementById("rateTable").deleteRow(i - 1);
    } 

    for(rate in rates)
        {
        var opt = document.createElement("option");
        opt.value= rates[rate];
        opt.innerHTML = rate;
        
        document.getElementById('currencies').appendChild(opt);

        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + rate + '</td><td>' + rates[rate] + '</td>';
        document.getElementById('rateTable').children[0].appendChild(tr);
        }

}

function cconvert() {
    let euro = document.getElementById('nummmber').value;
    let currencyRate = document.getElementById('currencies').value;

    console.log(euro);

    if (isEmpty(euro)) {
        document.getElementById('converted').innerHTML = "input field empty"
    } else {
        let value_calc = euro * currencyRate;
        document.getElementById('converted').innerHTML = value_calc
    }

}

function isEmpty(str) {
    return (!str || str.length === 0 );
}