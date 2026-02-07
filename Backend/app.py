from typing import Required
from flask import Flask, render_template, request # type: ignore

app = Flask(__name__)

@app.route("/form", methods=["GET","POST"])
def form():
    if request.method == "GET":
        return render_template("index.html")
    elif request.method=="POST":
        username = request.form["username"]
        return render_template("display.html", username=username)
    else:
        print("Error check")

if __name__ == "__main__":
    app.debug=True
    app.run()