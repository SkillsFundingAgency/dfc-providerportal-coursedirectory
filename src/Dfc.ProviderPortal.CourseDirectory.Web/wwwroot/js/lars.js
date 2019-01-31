

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
 
ajax_get('/js/lars.json', function(data) {
var target = document.getElementsByClassName('cd-lars-results')[0];

    let courses = [];
    for (let x of data) {

    let course = `
    <div class="cd-lars-search-result__container">
        <h3 class="govuk-heading-m" >${x.LearnAimRefTitle}</h3>
        <p class="govuk-body">LARS/QAN:<span class="govuk-!-font-weight-bold">${x.LearnAimRef}</span></p>
        <p class="govuk-body">Level: <span class="govuk-!-font-weight-bold">${x.NotionalNVQLevelv2}</span></p>
        <p class="govuk-body">Awarding body: <span class="govuk-!-font-weight-bold">${x.AwardOrgCode}</span></p>
        <p class="govuk-body"><a class="govuk-link" href="/addCourse">Choose this qualification</a></p>
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


