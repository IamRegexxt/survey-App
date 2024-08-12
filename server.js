const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/db');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const app = express();

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173' || 'http://localhost:5174',  // your frontend origin
  credentials: true, // allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(loggerMiddleware);

// Routes

const questionsRoutes = require('./routes/questionsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const choicesRoutes = require('./routes/choicesRoutes');
const userMasterlistRoutes = require('./routes/userMasterlistRoutes');
const statusRoutes = require('./routes/statusRoutes');
const instructionsRoutes = require('./routes/instructionsRoutes');
const subcategoriesRoutes = require('./routes/subcategoryRoutes');
const dataAnalysisRoutes = require('./routes/dataAnalysisRoutes');
const commentsRoutes = require('./routes/commentsResponseRoutes');
const choicesResponseRoutes = require('./routes/choicesResponseRoutes');
const scaleResponseRoutes = require('./routes/scaleResponseRoutes');


app.use('/questions', questionsRoutes);
app.use('/categories', categoryRoutes);
app.use('/choices', choicesRoutes);
app.use('/user-masterlist', userMasterlistRoutes);
app.use('/status', statusRoutes);
app.use('/instructions', instructionsRoutes);
app.use('/subcategories', subcategoriesRoutes);
app.use('/data-analysis', dataAnalysisRoutes);
app.use('/comment-response', commentsRoutes);
app.use('/choices-response', choicesResponseRoutes);
app.use('/scales-response', scaleResponseRoutes);



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
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
