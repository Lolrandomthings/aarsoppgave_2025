# import mysql.connector
from flask import Flask, render_template
app = Flask(__name__)

# mydb = mysql.connector.connect(
#     host="10.2.4.52",
#     user="JayPi",
#     password="Q",
#     database="aarsoppgave"
# )

@app.route('/')
def home(): 
    return render_template('Index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=800, debug = True)