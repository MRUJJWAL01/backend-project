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
    const file = req.file.buffer;
    // const base64File = Buffer.from(buffer).toString("base64");
    const response = id3.read(file);

    const audio = await uploadFile(file, "hello");

    const coverImage = await uploadFile(
      response.image.imageBuffer,
      "coverImage"
    );

    console.log(coverImage.url, "hello guys i am ujjwal");

    const song = await songModel.create({
      title: response.title,
      artist: response.artist,
      album: response.album,
      releaseDate: response.year,
      audioUrl: audio.url,
      imageUrl:coverImage.url

    });

    res.status(201).json({
      message: "success",
      song: song,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("error");
  }
});

router.get("/songs", async (req, res) => {
  const song = await songModel.find();
  res.status(201).json({
    massege: "File fetched successfully",
    song: song,
  });
});

module.exports = router;
