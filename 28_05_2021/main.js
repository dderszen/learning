const amount = document.querySelector('#amount');
let currencySelector = document.querySelector('#currency');
var url = 'http://api.nbp.pl/api/exchangerates/tables/C/?format=json';

fetch(url)
    .then((res) => res.json())
    .then((data)=>{
        data[0].rates.forEach(function(rate){
            var opt = document.createElement('option');
            opt.appendChild(document.createTextNode(rate.code));
            opt.id = rate.code;
            currencySelector.appendChild(opt);
        });
        //console.log(data[0].rates[0].code);
    });
