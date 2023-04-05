{
    'name': 'Demo Widget Module',
    'version': '13.0.1.0.1',
    'summary': 'A demo creating a Widget in Odoo 13',
    'author': 'NothingCtrl',
    'license': 'LGPL-3',
    'maintainer': 'NothingCtrl',
    'company': 'NothingCtrl',
    'website': 'https://camratus.com',
    'category':'Demo',
    'description': "",
    'depends': ['web'],
    'data': [
        'views/assets.xml',
        'views/views.xml',
        'security/ir.model.access.csv'
    ],
    'qweb': [
        'static/src/xml/demo_widget_tmpl.xml'
    ],
    'installable': True,
    'auto_install': False,
    'application': True
}
