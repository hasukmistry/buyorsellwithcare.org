import jQuery from 'jquery';
import suggestionsMap from '@config/suggestions-map';
import zipcodesMap from '@config/zipcodes-map';

const $ = jQuery.noConflict();

jQuery(() => {
    $('.et_pb_searchform .et_pb_s').on('input', () => {
        const query = $(this).val().toLowerCase();

        // bail early if user didn't enter alteast two characters
        if (query.length < 2) {
            $('#suggestions-box').hide();
            return;
        }

        const suggestionsBox = $('#suggestions-box');
        suggestionsBox.empty();

        let hasResults = false;

        $.each(suggestionsMap, (county, cities) => {
            const countyGroup = $('<div class="county-group"></div>').text(county);
            const countyGroupContainer = $('<div></div>').append(countyGroup);
            const countyFound = county.toLowerCase().includes(query);
            let cityFound = false;

            if (countyFound) {
                cities.forEach((city) => {
                    countyGroupContainer.append(`<div class="city-item">${city}</div>`);
                });
                hasResults = true;
            } else {
                cities.forEach((city) => {
                    // look for current city zipcodes
                    const zipcodes = zipcodesMap[city];

                    if (city.toLowerCase().includes(query) || zipcodes.includes(query)) {
                        if (!cityFound) {
                            // Ensure county name is added only once
                            countyGroupContainer.append(countyGroup);
                            cityFound = true;
                        }
                        countyGroupContainer.append(`<div class="city-item">${city}</div>`);
                        hasResults = true;
                    }
                });
            }

            if (countyFound || cityFound) {
                suggestionsBox.append(countyGroupContainer);
            }
        });

        if (hasResults) {
            suggestionsBox.show();
        } else {
            suggestionsBox.hide();
        }
    });
});

$(document).on('click', '.county-group', () => {
    $('.et_pb_searchform .et_pb_s').val($(this).text());
    $('#suggestions-box').hide();
});

$(document).on('click', '.city-item', () => {
    $('.et_pb_searchform .et_pb_s').val($(this).text());
    $('#suggestions-box').hide();
});
