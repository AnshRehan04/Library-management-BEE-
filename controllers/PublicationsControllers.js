const Publication = require("../models/Publications");

// Add publication
const addPublication = async (req, res) => {
  try {
    const data = req.body;
    const newPublication = await Publication.create(data);
    res.status(201).json({
      status: 201,
      msg: "Publication created successfully",
      publication: newPublication,
    });
  } catch (error) {
    console.error("Error creating publication:", error);
    res.status(500).json({ error: "Failed to create publication" });
  }
};

// Get all publications
const getPublications = async (req, res) => {
  try {
    const allPublications = await Publication.find();
    res.json({
      publications: allPublications,
    });
  } catch (error) {
    console.error("Error fetching publications:", error);
    res.status(500).json({ error: "Failed to fetch publications" });
  }
};

// Delete publication
const deletePublication = async (req, res) => {
  try {
    const id = req.params._id;

    if (!id) {
      return res.status(400).json({ error: "Publication ID is required" });
    }

    const deletedPublication = await Publication.findByIdAndDelete(id);

    if (!deletedPublication) {
      return res.status(404).json({ error: "Publication not found" });
    }

    res.status(200).json({ message: "Publication deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update publication
const updatePublication = async (req, res) => {
  try {
    const id = req.params._id;
    const updateData = req.body;

    if (!id) {
      return res.status(400).json({ error: "Publication ID is required" });
    }

    if (!updateData) {
      return res.status(400).json({ error: "Update data is required" });
    }

    const updatedPublication = await Publication.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedPublication) {
      return res.status(404).json({ error: "Publication not found" });
    }

    res.status(200).json(updatedPublication);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addPublication,
  getPublications,
  deletePublication,
  updatePublication,
};
