import os, sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from flask_bootstrap import Bootstrap


from flask import Flask, render_template, send_from_directory

#---------------------------------------
# create application
#---------------------------------------





#----------------------------------------
# initialization
#----------------------------------------

app = Flask(__name__)
Bootstrap(app)
app.config.update(
DEBUG = True,
)

#----------------------------------------
# controllers
#----------------------------------------


@app.route('/')
def index():
    return render_template('index.html')

#-----------------------------------------
# launch
#-----------------------------------------


if __name__ == '__main__':
    app.run()
