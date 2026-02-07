from flask import Flask, jsonify, request
from flask_cors import CORS

def createApp():
    app = Flask(__name__)
    CORS(app)
    return app

app = createApp()

fruits = []

# GET all fruits
@app.route("/fruits", methods=["GET"])
def get_fruits():
    return jsonify(fruits)

# ADD new fruit
@app.route("/fruits", methods=["POST"])
def add_fruits():
    data = request.get_json()

    data["id"] = int(data["id"])
    data["price"] = int(data["price"])

    fruits.append(data)
    return jsonify(fruits), 201

# UPDATE fruit by ID
@app.route("/fruits/<int:id>", methods=["PATCH"])
def edit_fruits(id):
    data = request.get_json()

    for fruit in fruits:
        if fruit["id"] == id:
            fruit.update(data)
            return jsonify(fruit)

    return jsonify({"error": "Fruit not found"}), 404

# DELETE fruit by ID
@app.route("/fruits/<int:id>", methods=["DELETE"])
def delete_fruit(id):
    global fruits

    for fruit in fruits:
        if fruit["id"] == id:
            fruits = [f for f in fruits if f["id"] != id]
            return jsonify(fruits)

    return jsonify({"error": "Fruit not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)