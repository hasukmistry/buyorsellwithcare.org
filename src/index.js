import $ from 'jquery';
import '@utils';

$(document).ready(() => {
    // onload randomise
    $('div.dfc-realtors div.et_pb_row div.dfc-realtor')
        .randomize('div.dfc-realtors div.et_pb_row');
});
