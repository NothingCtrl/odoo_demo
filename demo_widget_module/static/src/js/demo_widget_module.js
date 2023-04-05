odoo.define('demo_widget_module.demo_widget_model', function (require) {
    "use strict";
    var Widget = require('web.Widget');
    var core = require('web.core');
    var widget_registry = require('web.widget_registry');

    var _t = core._t;

    // here we are getting the value in an array.
    var widget_name = Widget.extend({
        // render your template (file: demo_widget_tmpl.xml)
        "template": "demo_widget_module_foo",

        //initialize
        init: function () {
            var self = this;
            this._super(parent);
            //initialize values to variables
            console.log(self)
        },

        //Binding Events
        events: {
            'click .class_m1': 'method1',
            'click .class_m2': 'method2',
        },

        start: function () {
            var self = this;
            this._super(parent);
            //your functionality code and logic
        },

        //creating functions
        method1: function () {
            //do something when click event fire on class_m1
            console.log("=== method 1 ===")
        },
        method2: function () {
            //do something when click event fire on class_m2
            console.log("=== method 2 ===")
        }
    });
    // register widget with name: 'demo_widget_foo'
    widget_registry.add('demo_widget_foo', widget_name);
});