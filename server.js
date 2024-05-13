const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/db');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);

// Routes
const questionsRoutes = require('./routes/questionsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const choicesRoutes = require('./routes/choicesRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const userMasterlistRoutes = require('./routes/userMasterlistRoutes');
const statusRoutes = require('./routes/statusRoutes');
const scaleRoutes = require('./routes/scaleRoutes');
const instructionsRoutes = require('./routes/instructionsRoutes');
const responsesRoutes = require('./routes/responsesRoutes');

app.use('/questions', questionsRoutes);
app.use('/categories', categoryRoutes);
app.use('/choices', choicesRoutes);
app.use('/comments', commentsRoutes);
app.use('/user-masterlist', userMasterlistRoutes);
app.use('/status', statusRoutes);
app.use('/scale', scaleRoutes);
app.use('/instructions', instructionsRoutes);
app.use('/responses', responsesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).json({ message: "Something went wrong!" }); // sample handling error message futa ka
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
