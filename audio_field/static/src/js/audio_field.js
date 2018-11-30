/*
# Copyright 2018 Oleksandr Komarov (https://modool.pro)
# License LGPL-3.0 or later (http://www.gnu.org/licenses/lgpl).
*/

odoo.define('web.audio_field', function (require) {
"use strict";

var core = require('web.core');

var FieldChar = core.form_widget_registry.get('char');
var QWeb = core.qweb;


var AudioField = FieldChar.extend({
    _renderPlayer: function () {
        this.$el.html(QWeb.render('audio_field', {'audio_url': this.get('value'), 'options': this.options}));
    },
    render_value: function() {
        if (this.get("effective_readonly") && !this.options.show_on_edit_mode) {
            this._renderPlayer();
        }else{
            this._super.apply(this, arguments);
        }
    }

});

core.form_widget_registry.add('audio_field', AudioField);

});
