const express = require("express");
const songModel = require("../models/song.model");
const router = express.Router();
const multer = require("multer");
const id3 = require("node-id3");
const app = require("../app");
const uploadFile = require("../services/storage.service");
const upload = multer({ storage: multer.memoryStorage() });
router.post("/songs", upload.single("audio"), async (req, res) => {
  try {
    const buffer = req.file.buffer;
    const base64File = Buffer.from(buffer).toString("base64");
    const response = id3.read(buffer);
    const result = await uploadFile(base64File, "hello");
    console.log(result);
    let coverImageResult = null;
    if (response?.image?.imageBuffer) {
     coverImageResult = await uploadFile(
        Buffer.from(response.image.imageBuffer).toString("base64"),
        "coverImage"
      );
    }
    console.log(coverImageResult);
    
    const song = await songModel.create({
      title: response.title,
      artist: response.artist,
      album: response.album,
      releaseDate: response.year,
      audioUrl: result.url,
      coverImage: coverImageResult?.url || null,
    });
    res.status(201).json({
      message: "success",
      song
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
});

module.exports = router;
