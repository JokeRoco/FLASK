from flask import Flask, jsonify, request, render_template
import socket


app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/submit', methods=["POST"])
def handle_message():
        message = request.form['message_input']
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.sendto(message.encode('cp1252'), ('192.168.4.11', 51522))
        '''
        for i in range(1,254):
             s.sendto(message.encode('utf-8'), ('192.168.48.'+str(i), 51522))

        for i in range(2, 254):
             s.sendto(message.encode('utf-8'), ('192.168.4.'+str(i), 51522))'''

        return render_template("index.html")



if __name__ == '__main__':
    app.run('0.0.0.0', '5000', debug=True, ssl_context="adhoc")

