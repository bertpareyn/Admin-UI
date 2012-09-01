var html = '';

var createRowElement = function(el) {
    switch(el.element) {
        case 'header':
            html += '<' + el.type + '>' + el.label + '</' + el.type + '>'
            break;
        case 'label':
            html += '<label for="' + el.for + '">' + el.label + '</label>';
            break;
        case 'input':
            html += '<input type="text" id="' + el.id + '"/>'
            break;
        case 'button':
            html += '<button type="' + el.type + '">' + el.label + '</button>'
            break;
    }
};

var generateAdminUI = function(config, callback) {
    for (var i = 0; i < config.rows.length; i++) {
        createRowElement(config.rows[i]);
    }
    callback('<html><head></head><body>' + html + '</body></html>');
};

module.exports.generateAdminUI = generateAdminUI;