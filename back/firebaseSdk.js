const admin = require("firebase-admin");
const serviceAccount = require("./path/to/your/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const authenticateToken = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};

app.use(authenticateToken);
