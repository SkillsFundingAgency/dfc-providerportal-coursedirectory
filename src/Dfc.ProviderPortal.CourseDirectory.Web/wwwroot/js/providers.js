


function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                //console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('/js/providers.json', function(data) {
//console.log(data.length);
const target = document.getElementsByClassName('cd-provider-results')[0];


let provs = [];
for (let x of data) {
    //console.log(x.UnitedKingdomProviderReferenceNumber, x.ProviderName );

let getContact = x.ProviderContact.map((y) => {
    if (y.ContactType === "L") {
            let v = `
                        <td class="govuk-table__cell">${x.UnitedKingdomProviderReferenceNumber}</td>
                        <td class="govuk-table__cell">${x.ProviderName}</td>
                        <td class="govuk-table__cell">${y.ContactAddress.Items[0]}, ${y.ContactAddress.StreetDescription}</td>
                        <td class="govuk-table__cell">${y.ContactAddress.PostCode}</td>
                        <td class="govuk-table__cell"><a href="../../providers/details">view</a></td>
                        `
provs.push(v)
        }
})

  

}

provs.forEach((x) => {
    let tb = document.createElement("tr");
    tb.classList.add("govuk-table__row");
    tb.innerHTML = x;
    target.append(tb);
});
});
