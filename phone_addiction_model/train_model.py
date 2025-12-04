import warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")

import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OrdinalEncoder, LabelEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix
from lightgbm import LGBMClassifier

# ===============================
# 1. LOAD DATASET
# ===============================
df = pd.read_csv("phone_addiction_dataset_balanced.csv")

# ===============================
# 2. SPLIT FEATURES AND TARGET
# ===============================
X = df.drop("phone_addiction", axis=1)
y = df["phone_addiction"]

# ===============================
# 3. DEFINE COLUMN TYPES
# ===============================
ordinal_mappings = {
    "phone_use_hours": [["less than 2 hours", "2 to 4 hours", "5 to 7 hours", "8 to 10 hours", "more than 10 hours"]],
    "sleep_hours": [["less than 4 hours", "4 to 6 hours", "7 to 8 hours", "more than 8 hours"]],
    "person_interaction": [["never", "rarely", "sometimes", "often", "always"]],
    "social_media_hours": [["less than 1 hour", "1 to 3 hours", "4 to 6 hours", "7 to 9 hours", "more than 9 hours"]],
    "gaming_hours": [["less than 1 hour", "1 to 3 hours", "4 to 6 hours", "7 to 9 hours", "more than 9 hours"]],
    "educational_hours": [["less than 1 hour", "1 to 3 hours", "4 to 6 hours", "7 to 9 hours", "more than 9 hours"]],
    "family_communication": [["never", "rarely", "sometimes", "often", "always"]],
    "phone_anxiety": [["never", "rarely", "sometimes", "often", "always"]],
    "phone_during_meals": [["never", "rarely", "sometimes", "often", "always"]],
    "lose_track_time": [["never", "rarely", "sometimes", "often", "always"]],
    "performance_impact": [["never", "rarely", "sometimes", "often", "always"]],
    "phone_before_sleep": [["never", "rarely", "sometimes", "often", "always"]],
    "phone_after_wakeup": [["never", "rarely", "sometimes", "often", "always"]]
}

ordinal_cols = list(ordinal_mappings.keys())

# -------------------------------
# Make LabelEncoder usable in ColumnTransformer
# -------------------------------
class LabelEncoderWrapper(LabelEncoder):
    def fit(self, X, y=None):
        self.le = LabelEncoder()
        self.le.fit(X)
        return self

    def transform(self, X):
        return self.le.transform(X).reshape(-1, 1)

    def fit_transform(self, X, y=None):
        return self.fit(X).transform(X)

# ===============================
# 4. DEFINE PREPROCESSOR
# ===============================
preprocessor = ColumnTransformer([
    ("ordinals", OrdinalEncoder(categories=[ordinal_mappings[c][0] for c in ordinal_cols]), ordinal_cols),
    ("gender_label", LabelEncoderWrapper(), ["gender"])
], remainder="drop")  # Drop unused fields

# ===============================
# 5. TRAIN MODEL
# ===============================
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)

model = Pipeline([
    ("preprocessor", preprocessor),
    ("classifier", LGBMClassifier(verbose=-1, random_state=42)),
])

model.fit(X_train, y_train)

# ===============================
# 6. SAVE MODEL
# ===============================
joblib.dump(model, "phone_addiction_model.pkl")
print("✅ Model saved as phone_addiction_model.pkl")

# ===============================
# 7. EVALUATION
# ===============================
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print("Precision:", precision_score(y_test, y_pred, pos_label="yes"))
print("Recall:", recall_score(y_test, y_pred, pos_label="yes"))
print("F1:", f1_score(y_test, y_pred, pos_label="yes"))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
