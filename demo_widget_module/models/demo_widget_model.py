from odoo import models, fields, api

class DemoWidgetModel(models.Model):
    _name = "demo.widget.model"

    name = fields.Char(string="Name")

    @api.model
    def create(self, vals):
        return super(DemoWidgetModel, self).create(vals)