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
    console.log('search page');

    const searchButton =  document.getElementsByClassName('submit')[0];
    const resultsContainer = document.getElementsByClassName('cd-apprenticeships-results')[0];

    searchButton.addEventListener('click', (e) => {
       
        resultsContainer.classList.add('visible');

    })
}



const item = document.getElementsByClassName('item');
const items = [...item];


for(let x of items) {
    items.forEach( (item) => {
        //item.classList.remove('active'); 
console.log(item.classList);
    })
    x.addEventListener('click', () => {


        //if (x.classList.contains('active')) {
        //    x.classList.remove('active');
        //}
    x.classList.add('active');
items.forEach( (val) => {
    if (val.classList.contains('active')) {
    console.log(val.classList);
}
});

//if (x)
  //      console.log( ...x.childNodes);
    })
}



/* eslint-disable no-console */
// jQuery Validate Hooks

// see: https://gist.github.com/beccasaurus/957732#file-jquery-validate-hooks-js
// source: https://gist.githubusercontent.com/beccasaurus/957732/raw/e09b422c12c7d8098fa9ae5bb44b50d4e049baaf/jquery.validate.hooks.js

'use strict';

(function ($) {
    $.fn.addTriggersToJqueryValidate = function () {
        // Loop thru the elements that we jQuery validate is attached to
        // and return the loop, so jQuery function chaining will work.
        return this.each(function () {
            var form = $(this);

            // Grab this element's validator object (if it has one)
            var validator = form.data('validator');

            // Only run this code if there's a validator associated with this element
            if (!validator)
                return;

            // Only add these triggers to each element once
            if (form.data('jQueryValidateTriggersAdded'))
                return;
            else
                form.data('jQueryValidateTriggersAdded', true);

            // Override the function that validates the whole form to trigger a
            // formValidation event and either formValidationSuccess or formValidationError
            var oldForm = validator.form;
            validator.form = function () {
                var result = oldForm.apply(this, arguments);
                var form = this.currentForm;
                $(form).trigger((result == true) ? 'formValidationSuccess' : 'formValidationError', form);
                $(form).trigger('formValidation', [form, result]);
                return result;
            };

            // Override the function that validates the whole element to trigger a
            // elementValidation event and either elementValidationSuccess or elementValidationError
            var oldElement = validator.element;
            validator.element = function (element) {
                var result = oldElement.apply(this, arguments);
                $(element).trigger((result == true) ? 'elementValidationSuccess' : 'elementValidationError', element);
                $(element).trigger('elementValidation', [element, result]);
                return result;
            };
        });
    };

    /* Below here are helper methods for calling .bind() for you */

    $.fn.extend({
        // Wouldn't it be nice if, when the full form's validation runs, it triggers the
        // element* validation events?  Well, that's what this does!
        //
        // NOTE: This is VERY coupled with jquery.validation.unobtrusive and uses its
        //       element attributes to figure out which fields use validation and
        //       whether or not they're currently valid.
        //
        triggerElementValidationsOnFormValidation: function () {
            return this.each(function () {
                $(this).bind('formValidation', function (e, form) {
                    $(form).find('*[data-val=true]').each(function (i, field) {
                        if ($(field).hasClass('input-validation-error')) {
                            $(field).trigger('elementValidationError', field);
                            $(field).trigger('elementValidation', [field, false]);
                        } else {
                            $(field).trigger('elementValidationSuccess', field);
                            $(field).trigger('elementValidation', [field, true]);
                        }
                    });
                });
            });
        },

        formValidation: function (fn) {
            return this.each(function () {
                $(this).bind('formValidation', function (e, element, result) { fn(element, result); });
            });
        },

        formValidationSuccess: function (fn) {
            return this.each(function () {
                $(this).bind('formValidationSuccess', function (e, element) { fn(element); });
            });
        },

        formValidationError: function (fn) {
            return this.each(function () {
                $(this).bind('formValidationError', function (e, element) { fn(element); });
            });
        },

        formValidAndInvalid: function (valid, invalid) {
            return this.each(function () {
                $(this).bind('formValidationSuccess', function (e, element) { valid(element); });
                $(this).bind('formValidationError', function (e, element) { invalid(element); });
            });
        },

        elementValidation: function (fn) {
            return this.each(function () {
                $(this).bind('elementValidation', function (e, element, result) { fn(element, result); });
            });
        },

        elementValidationSuccess: function (fn) {
            return this.each(function () {
                $(this).bind('elementValidationSuccess', function (e, element) { fn(element); });
            });
        },

        elementValidationError: function (fn) {
            return this.each(function () {
                $(this).bind('elementValidationError', function (e, element) { fn(element); });
            });
        },

        elementValidAndInvalid: function (valid, invalid) {
            return this.each(function () {
                $(this).bind('elementValidationSuccess', function (e, element) { valid(element); });
                $(this).bind('elementValidationError', function (e, element) { invalid(element); });
            });
        }
    });
})(jQuery);


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


const provider = document.getElementsByClassName('provider')[0];

//console.log(provider);

function ajax_get1(url, callback) {
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
 
ajax_get1('/js/providers.json', function(data) {
var target = document.getElementsByClassName('cd-provider-results')[0];

var provs = [];
for (let x of data) {

 x.ProviderContact.map((y) => {
    if (y.ContactType === "L") {
            let v = `
                        <td class="govuk-table__cell">${x.UnitedKingdomProviderReferenceNumber}</td>
                        <td class="govuk-table__cell">${x.ProviderName}</td>
                        <td class="govuk-table__cell">${y.ContactAddress.Items[0]}, ${y.ContactAddress.StreetDescription}</td>
                        <td class="govuk-table__cell">${y.ContactAddress.PostCode}</td>
                        <td class="govuk-table__cell">${x.ProviderStatus}</td>
                        <td class="govuk-table__cell"><a class="govuk-link" href="../../providers/details">view</a></td>
                        `
provs.push(v)
        }
})

  

}


provs.forEach((x) => {
    let tb = document.createElement("tr");
    tb.classList.add("govuk-table__row");
    tb.innerHTML = x;
    if (target) {
        target.append(tb);
        }
});
});

const searchInput = document.getElementById("search");
const searchInputLabel = document.querySelector(".search-input-wrapper .cd-search__label");

if (provider) {


searchInput.addEventListener("focus", () => {


if (document.querySelector(":focus") !== searchInput) {
    console.log("t");
searchInputLabel.classList.add("visible");
} else {
searchInputLabel.classList.remove("visible");
}

})
    }

//export default Providers;

/* eslint-disable no-console */

"use strict";

(function ($) {
    var debounce = function (cb, delay) {
        var inDebounce;
        return function () {
            var context = this;
            var args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(function () {
                cb.apply(context, args);
            }, delay);
        };
    };

    var isNullOrWhitespace = function (input) {
        if (typeof input === 'undefined' || input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    }

    var replaceAll = function (search, find, replace) {
        return search.split(find).join(replace);
    };

    var makeRequestWithPayload = function (payload, success) {
        console.log(payload);
        var qs = $.param(payload);
        qs = replaceAll(qs, "%5B%5D", "");
        $.get("/LarsSearch?" + qs, success);
    };

    var makeRequestWithUrl = function (url, success) {
        console.log(url);
        $.get(url, success);
    };

    var removeSearchResults = function () {
        var $larsSearchResultContainer = $("#LarsSearchResultContainer");
        $larsSearchResultContainer.html("");
    };

    var replaceSearchResult = function (searchResults) {
        var $larsSearchResultContainer = $("#LarsSearchResultContainer");
        $larsSearchResultContainer.html("");
        $larsSearchResultContainer.html(searchResults);
    };

    var $larsSearchTerm = $("#LarsSearchTerm");

    var doSearch = function () {
        if (isNullOrWhitespace($larsSearchTerm.val())) {
            removeSearchResults();
        } else {
            var $allCheckedNotionalNvqLevelV2FilterCheckboxes = $("input[name='NotionalNVQLevelv2Filter']:checkbox:checked");
            var $allCheckedAwardOrgCodeFilterCheckboxes = $("input[name='AwardOrgCodeFilter']:checkbox:checked");
            var $allSectorSubjectAreaTier1FilterCheckboxes = $("input[name='SectorSubjectAreaTier1Filter']:checkbox:checked");
            var $allSectorSubjectAreaTier2FilterCheckboxes = $("input[name='SectorSubjectAreaTier2Filter']:checkbox:checked");

            makeRequestWithPayload({
                SearchTerm: $larsSearchTerm.val(),
                NotionalNVQLevelv2Filter: $allCheckedNotionalNvqLevelV2FilterCheckboxes.map(function () {
                    return $(this).val();
                }).get(),
                AwardOrgCodeFilter: $allCheckedAwardOrgCodeFilterCheckboxes.map(function () {
                    return $(this).val();
                }).get(),
                SectorSubjectAreaTier1Filter: $allSectorSubjectAreaTier1FilterCheckboxes.map(function () {
                    return $(this).val();
                }).get(),
                SectorSubjectAreaTier2Filter: $allSectorSubjectAreaTier2FilterCheckboxes.map(function () {
                    return $(this).val();
                }).get()
            }, onSucess);
        }
    };

    var assignEventsToAllCheckboxes = function () {
        var $notionalNvqLevelV2FilterCheckboxes = $("input[name='NotionalNVQLevelv2Filter']:checkbox");
        var $awardOrgCodeFilterCheckboxes = $("input[name='AwardOrgCodeFilter']:checkbox");
        var $sectorSubjectAreaTier1FilterCheckboxes = $("input[name='SectorSubjectAreaTier1Filter']:checkbox");
        var $sectorSubjectAreaTier2FilterCheckboxes = $("input[name='SectorSubjectAreaTier2Filter']:checkbox");

        $notionalNvqLevelV2FilterCheckboxes.on("click", doSearch);
        $awardOrgCodeFilterCheckboxes.on("click", doSearch);
        $sectorSubjectAreaTier1FilterCheckboxes.on("click", doSearch);
        $sectorSubjectAreaTier2FilterCheckboxes.on("click", doSearch);
    };

    var assignEventToClearAllFiltersLink = function () {
        var $clearAllFiltersLink = $("#ClearAllFilters");

        $clearAllFiltersLink.on("click", function (e) {
            e.preventDefault();
            var $allCheckedFilterCheckboxes = $("input[name='NotionalNVQLevelv2Filter']:checkbox:checked, input[name='AwardOrgCodeFilter']:checkbox:checked, input[name='SectorSubjectAreaTier1Filter']:checkbox, input[name='SectorSubjectAreaTier2Filter']:checkbox");
            var allCheckedFilterCheckboxesLength = $allCheckedFilterCheckboxes.length;

            for (var i = 0; i < allCheckedFilterCheckboxesLength; i++) {
                if (i === (allCheckedFilterCheckboxesLength - 1)) {
                    $($allCheckedFilterCheckboxes[i]).trigger("click");
                } else {
                    $($allCheckedFilterCheckboxes[i]).prop('checked', false);
                }
            }
        });
    };

    var assignEventsToLarsSearchPagination = function () {
        var $larsSearchResultPaginationItems = $("#LarsSearchResultContainer .pagination .pagination__item");
        $larsSearchResultPaginationItems.on("click", function (e) {
            e.preventDefault();
            var url = $(e.target).attr("href");
            makeRequestWithUrl(url, onSucess);
        });
    };

    var onSucess = function (data) {
        replaceSearchResult(data);
        assignEventsToAllCheckboxes();
        assignEventToClearAllFiltersLink();
        assignEventsToLarsSearchPagination();
    };

    $larsSearchTerm.on("keyup", debounce(doSearch, 400));



    $(window).on('load', function(){


    //$(".section-title:first").addClass('open');
    //var openOnLoad = $(".section-title:first").next('.collapsing-section');
    //$(openOnLoad).slideDown();

    $(".section-title").on('focus', function () {
      if (!$(this).data("mouseDown"))
        $(this).click();
    });

    $(".section-title").on('mousedown', function () {
      $(this).data("mouseDown", true);
    });

    $(".section-title").on('mouseup', function () {
      $(this).removeData("mouseDown");
    });

    $(".section-title").on('click', function () {
      if ($(this).hasClass('open')) {
        //Close the current section
        $(this).removeClass('open');
        $('.collapsing-section').slideUp();

      }
      else {
        //close the prev section & open the newly click
        //$('.section-title').removeClass('open');
        //$('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
        $(this).addClass('open');
        $('.collapsing-section').addClass('open');
        var sectionToOpen = $(this).next('.collapsing-section');
        $(sectionToOpen).slideDown();
      }
    });



    var toggle = false;
    $('.btn').click(function() {
      toggle = !toggle;
      if(toggle){
        $('#A').animate({left: 0});
      }
      else{
        $('#A').animate({left:-400});
      }
    });
  });
})(jQuery);