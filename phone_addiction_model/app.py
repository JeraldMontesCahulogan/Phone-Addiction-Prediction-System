from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
from sklearn.preprocessing import LabelEncoder

# Custom class
class LabelEncoderWrapper(LabelEncoder):
    def fit(self, X, y=None):
        self.le = LabelEncoder()
        self.le.fit(X)
        return self

    def transform(self, X):
        return self.le.transform(X).reshape(-1, 1)

    def fit_transform(self, X, y=None):
        return self.fit(X).transform(X)

app = Flask(__name__)
CORS(app)  # ✅ Allow all origins

# Load model
model = joblib.load("phone_addiction_model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    sample = pd.DataFrame([data])
    prediction = model.predict(sample)[0]
    return jsonify({"prediction": prediction})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
