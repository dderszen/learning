let currencySelector = document.querySelector('#currency');
var url = 'http://api.nbp.pl/api/exchangerates/tables/C/?format=json';
var arrCurrency = [];
var arrValues = [];
fetch(url)
    .then((res) => res.json())
    .then((data)=>{
        data[0].rates.forEach(function(rate){
            arrCurrency.push(rate.code);
            arrValues.push(rate.bid);
            var opt = document.createElement('option');
            opt.appendChild(document.createTextNode(rate.code));
            opt.id = rate.code; 
            currencySelector.appendChild(opt);
        });
        //console.log(data[0].rates[0].code);
    });


    
document.getElementById('exchange').addEventListener('click', (e)=>{
    //console.log(currencySelector.value);
    const amount = document.querySelector('#amount').value;
    var index = arrCurrency.findIndex(x => x == currencySelector.value);
    var exchangedValue = amount / arrValues[index];
    document.getElementById("exchanged-amount").innerText = Math.round(exchangedValue * 100) / 100;
    document.getElementById("currency-tag").innerText = currencySelector.value;
    document.getElementById("eaContainer").style.opacity = '1';
});