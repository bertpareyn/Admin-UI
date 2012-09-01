var html = '';

var createRowElement = function(el) {
    switch(el.element) {
        case 'form':
            html += '<form action="' + el.action + '" method="' + el.method + '">'
            for (var i = 0; i < el.elements.length; i++) {
                createRowElement(el.elements[i]);
                if (i === el.elements.length -1) {
                    html += "</form>";
                }
            }
            break;
        case 'header':
            html += '<' + el.type + '>' + el.label + '</' + el.type + '>'
            break;
        case 'label':
            html += '<label for="' + el.for + '">' + el.label + '</label>';
            break;
        case 'input':
            html += '<input type="text" id="' + el.id + '" name="' + el.name + '"/>'
            break;
        case 'button':
            html += '<button type="' + el.type + '">' + el.label + '</button>'
            break;
    }
};

var generateAdminUI = function(config, callback) {
    html = '';
    for (var i = 0; i < config.rows.length; i++) {
        createRowElement(config.rows[i]);
    }
    callback('<html><head></head><body>' + html + '</body></html>');
};

module.exports.generateAdminUI = generateAdminUI;