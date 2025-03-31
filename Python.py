import mysql.connector

from flask import Flask, render_template
app = Flask(__name__)
mydb = mysql.connector.connect(
    host="10.2.4.52",
    user="JayPi",
    password="balls",
    database="task"
)

@app.route('/')
def hello_world():
    return 'Hello, World!'

# @app.route('/ord')
# def ord():
#     return 'World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug = True)