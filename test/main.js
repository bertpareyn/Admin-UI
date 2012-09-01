var should = require('should');
var adminui = require('../lib/main');

adminui.generateAdminUI({
    "rows": [{
            "element": "header",
            "type": "h1",
            "label": "Create a new tenant"
        }, {
            "element": "label",
            "label": "ID:",
            "for": "tenant_id"
        }, {
            "element": "input",
            "id": "tenant_id"
        }, {
            "element": "label",
            "label": "Name:",
            "for": "tenant_name"
        }, {
            "element": "input",
            "id": "tenant_name"
        }, {
            "element": "label",
            "label": "Port:",
            "for": "tenant_port"
        }, {
            "element": "input",
            "id": "tenant_port"
        }, {
            "element": "button",
            "type": "submit",
            "label": "Create tenant"
        }
    ]
}, function(html) {
    console.log(html);
});