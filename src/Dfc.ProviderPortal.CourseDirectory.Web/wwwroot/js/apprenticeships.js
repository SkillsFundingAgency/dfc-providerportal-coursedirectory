function get_data(url, callback) {
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


get_data('/js/lars.json', function(data) {
var target = document.getElementsByClassName('cd-apprenticeships-results')[0];

    let courses = [];
    for (let x of data) {

    let course = `
    <div class="cd-apprenticeships-search-result__container">
        <h3 class="govuk-heading-m" >${x.LearnAimRefTitle}</h3>
        <p class="govuk-body">Level: <span class="govuk-!-font-weight-bold">${x.NotionalNVQLevelv2}</span></p>
        <p class="govuk-body"><a class="govuk-link" href="/apprenticeships/add">Choose this apprenticeship</a></p>
    </div>`

      courses.push(course);
    }
    courses.forEach((course)=> {
    let container = document.createElement("div");
        container.innerHTML = course;
        if(target) {
            target.append(container);
            }
    });


});



function radioSwitcher(targetDiv) {
//const del = document.getElementsByClassName('delivery-checkbox');
   
const apprenticeshipQuestion = document.getElementsByClassName(targetDiv)[0];
    
if (apprenticeshipQuestion) {
    let button = document.querySelectorAll('.govuk-button')[0];
    let radios = document.querySelectorAll('.'+targetDiv+' input[type="radio"]');
  

    radios.forEach((f) => {
        f.addEventListener("click", function(x){

            button.setAttribute("href", x.target.value);
        })
    })
}
}

radioSwitcher('apprenticeship-type');
radioSwitcher('employerNationalQuestion');


const DualDeliveryPage = document.getElementsByClassName('dual-delivery')[0];

if (DualDeliveryPage) {
  
    let employerCheckbox = document.getElementById('employer');
    let selectOption = document.querySelectorAll('.select-list')[0];

    employerCheckbox.checked = true;
    employerCheckbox.addEventListener("click", () => {
        selectOption.classList.toggle("visible");
    })
   
}

const checkBoxes = document.querySelectorAll('.govuk-checkboxes__input');

let options = [];
 
function getOptions () {
    let x = ``;
checkBoxes.forEach((checkbox) => {
               
        if (checkbox.checked == true) {

            options.push(checkbox.value);
           let uniqueOptions = Array.from(new Set(options));

            let row = ` <tr class="govuk-table__row">
                    <th class="govuk-table__header" scope="row">venue</th>
                    <td class="govuk-table__cell govuk-table__cell--numeric">${uniqueOptions}</td>
                    <td class="govuk-table__cell govuk-table__cell--numeric"><a href="#">delete</a></td>
                </tr>`;
            x = row;

           
        }

});
    return x;
}



let addAnother = document.getElementById('List');

if(addAnother) {

addAnother.addEventListener('click', () => {
    let v = getOptions();
    let target = document.getElementById("Results");
    target.innerHTML +=(v);
    let table = document.getElementById('ResultsTable');
    table.classList.add('visible-table');
});

    }
const searchpage = document.getElementsByClassName('apprenticeship-search-page')[0];

if (searchpage) {
 
   
    const searchButton =  document.getElementsByClassName('submit')[0];
    const resultsContainer = document.getElementsByClassName('cd-apprenticeships-results')[0];

    searchButton.addEventListener('click', () => {
       
        resultsContainer.classList.add('visible');

    })
}