from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from chat import get_response

app = Flask(__name__)
CORS(app)

# @app.get('/')
# def index_get():
#     return render_template('base.html')

@app.post('/')
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    return jsonify({"answer": response})

if __name__ == '__main__':
    app.run(debug=True)


