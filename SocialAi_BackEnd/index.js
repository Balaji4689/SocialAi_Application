const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); 

const { GoogleGenerativeAI } = require("@google/generative-ai");


dotenv.config()
const port = process.env.PORT || 2000;
const app = express(); 
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("mongodb connected sucessfully"))
    .catch((error)=>console.error("mongodb connection error:",error))

    const API_KEY = process.env.GEMINI_API_KEY;
    if (!API_KEY) {
    console.error(' GEMINI_API_KEY is not defined.');
    process.exit(1);
   }
   const genAI = new GoogleGenerativeAI(API_KEY);

//    chat boat 
   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

app.post("/api/chat", async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        const result = await model.generateContent(message);
        const text = result.response.text();
        res.json({ text });
    } catch (error) {
        console.error("Error from Gemini API:", error);
        res.status(500).json({ error: "Sorry, I can't connect right now. Please try again." });
    }
});


// Generate Text
app.post("/api/generate-text", async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }
  
    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      res.json({ text });
    } catch (error) {
      console.error("Error generating text:", error);
      res.status(500).json({ error: "Failed to generate text." });
    }
  });
  
// Generate Tags
app.post("/api/generate-tags", async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }
  
    try {
      let retries = 2;
      let tags = null;
  
      while (retries > 0 && !tags) {
        try {
          const result = await model.generateContent(
            `Generate 5-7 trending social media hashtags for: ${prompt}.
            Return them as a comma-separated list.`
          );
  
          tags = result.response.text();
        } catch (err) {
          console.warn("Gemini error, retrying...", err.message);
          retries--;
          if (retries === 0) throw err;
        }
      }
  
      res.json({ tags });
    } catch (error) {
      console.error("Error generating tags:", error);
      res.json({ tags: "#AI, #Tech, #Innovation, #Future, #Productivity" });
    }
  });
  
  

  app.post("/api/generate-image", async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }
  
    try {
      const safeText = prompt.replace(/\s+/g, " ").slice(0, 50);
  
      const imageUrl = `https://via.placeholder.com/600x400.png?text=${encodeURIComponent(safeText)}`;
  
      res.json({ imageUrl });
    } catch (error) {
      console.error("Error generating image:", error);
      res.status(500).json({ error: "Failed to generate image." });
    }
  });
  
  

const userRouter = require("./routes/userRoutes")
app.use('/user', userRouter);


app.get("/", (req , res)=>{
    res.send("API is runnning")
})

app.use((err , req, res , next)=>{
    console.error(err.stack);
    res.status(500).send("something getting error in server")

})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port} `)
})






