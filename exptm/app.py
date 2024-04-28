from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/')
def index():
   return render_template('index.html')


@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
   if request.method == 'POST':
       name = request.form['name']
       email = request.form['email']
       feedback = request.form['feedback']
       # Here you can process the feedback, such as storing it in a database
       # For simplicity, we'll just print it
       print("Received feedback from:", name)
       print("Email:", email)
       print("Feedback:", feedback)
       return 'Feedback submitted successfully!'


if __name__ == '__main__':
   app.run(debug=True)