import React, { useState } from "react";
import {API_path} from '../helper/Api'


const Posts = () => {
  const platforms = ["Instagram", "LinkedIn", "X"];

  const [postContent, setPostContent] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleGenerateText = async () => {
    setStatus("Generating post text...");
    try {
      const res = await fetch(`${API_path}/api/generate-text`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: "Write a professional LinkedIn post about AI in business." }),
      });
      const data = await res.json();
      if (data.text) {
        setPostContent(data.text);
        setStatus(" Post text generated!");
      } else {
        setStatus(" Failed to generate text");
      }
    } catch (err) {
      setStatus(" Error generating text");
    }
  };

  const handleGenerateTags = async () => {
    setStatus("Generating tags...");
    try {
      const res = await fetch(`${API_path}/api/generate-tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: postContent || "AI in business" }),
      });
      const data = await res.json();
      if (data.tags) {
        setTags(data.tags);
        setStatus(" Tags generated!");
      } else {
        setStatus(" Failed to generate tags");
      }
    } catch (err) {
      setStatus(" Error generating tags");
    }
  };


  const handleGenerateImage = async () => {
    setStatus("Generating image...");
    try {
      const res = await fetch(`${API_path}/api/generate-image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: postContent.slice(0, 50) || "AI Post" }),
      });
      const data = await res.json();
      console.log("Image API response:", data); 
  
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);  
        setStatus("Image generated!");
      } else {
        setStatus("Failed to generate image");
      }
    } catch (err) {
      setStatus("Error generating image");
    }
  };
  
  

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>Create New Post</h1>
          <p>Draft your content and generate a unique image for each platform.</p>
        </div>

        <div className="content-section">
          <div className="form-group">
            <div className="label-btn">
              <label htmlFor="postContent">Post Content:</label>
              <button className="btn" onClick={handleGenerateText}>
                Generate Text
              </button>
            </div>
            <textarea  id="postContent"  placeholder="Write your post content here..."  value={postContent}  onChange={(e) => setPostContent(e.target.value)}/>
          </div>
          <div className="form-group">
            <div className="label-btn">
              <label htmlFor="tags">Tags (comma-separated):</label>
              <button className="btn" onClick={handleGenerateTags}>
                Generate Tags
              </button>
            </div>
            <input  type="text"  id="tags"  placeholder="e.g., #remotework, #tech, #innovation"  value={tags}  onChange={(e) => setTags(e.target.value)}/>
          </div>

          {/* Image */}
          <div className="image-section">
            <div className="label-btn">
              <label>Generate Image with AI</label>
              <button type="button" id="generateImageBtn" className="btn" onClick={handleGenerateImage}>
                Generate Image
              </button>
            </div>
            <div className="status">{status}</div>
            <div className="image-preview">
              {imageUrl ? (
                <img  src={imageUrl}  alt="Generated"  style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}/>
              ) : (
                "Image will appear here"
              )}
            </div>

          </div>

          <div className="social-section">
            <h2>Connect Pages</h2>
            <p>Toggle which platforms to connect and post to. (This is a simulation)</p>
            <div className="platforms">
              {platforms.map((platform, idx) => (
                <div key={idx} className="platform-card">
                  <div className="platform-name">
                    <div className="status-dot"></div>
                    <span>{platform}</span>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="schedule-btn">
            <button className="btn w-full">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
