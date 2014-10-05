from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_wtf import Form, RecaptchaField
from wtforms import TextField, HiddenField, RadioField,\
    BooleanField
from wtforms.validators import DataRequired

# straight from the wtforms docs

class ExampleForm(Form):
    field1 = TextField('First Field', description='This is field one.')
    field2 = TextField('Second Field', description='This is field two.',
                    validators=[DataRequired()])
    hidden_field = HiddenField('You cannot see this', description='Nope')
    recaptcha = RecaptchaField('A sample recaptcha field')
    radio_field = RadioField('This is a radio field', choices=[
        ('head_radio', 'Head radio'),
        ('radio_76fm', "Radio '76 FM"),
        ('lips_106', 'Lips 106'),
        ('wctr', 'WCTR'),
    ])
    checkbox_field = BooleanField('This is a checkbox',
                                description='Checkboxes can be tricky.')


def create_app():
        app = Flask(__name__)
        Bootstrap(app)

         # in a real app, these should be configured through Flask-Appconfig
        app.config['SECRET_KEY'] = 'devkey'
        app.config['RECAPTCHA_PUBLIC_KEY'] = \
            '6Lfol9cSAAAAADAkodaYl9wvQCwBMr3qGR_PPHcw'

        @app.route('/')
        def user():
            form = ExampleForm()
            form.validate_on_submit() #to get error messages to the browser
            return render_template('user.html', form=form)

        return app


if __name__ == '__main__':
    create_app().run(debug=True)