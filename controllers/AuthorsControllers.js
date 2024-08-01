const Author = require("../models/Authors");

// Add author
const addAuthor = async (req, res) => {
  try {
    const data = req.body;
    const newAuthor = await Author.create(data);
    res.status(201).json({
      status: 201,
      msg: "Author created successfully",
      author: newAuthor,
    });
  } catch (error) {
    console.error("Error creating author:", error);
    res.status(500).json({ error: "Failed to create author" });
  }
};

// Get all authors
const getAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.find();
    res.json({
      authors: allAuthors,
    });
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ error: "Failed to fetch authors" });
  }
};

// Delete author
const deleteAuthor = async (req, res) => {
  try {
    const id = req.params._id;

    if (!id) {
      return res.status(400).json({ error: "Author ID is required" });
    }

    const deletedAuthor = await Author.findByIdAndDelete(id);

    if (!deletedAuthor) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.status(200).json({ message: "Author deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update author
const updateAuthor = async (req, res) => {
  try {
    const id = req.params._id;
    const updateData = req.body;

    if (!id) {
      return res.status(400).json({ error: "Author ID is required" });
    }

    if (!updateData) {
      return res.status(400).json({ error: "Update data is required" });
    }

    const updatedAuthor = await Author.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedAuthor) {
      return res.status(404).json({ error: "Author not found" });
    }

    res.status(200).json(updatedAuthor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addAuthor,
  getAuthors,
  deleteAuthor,
  updateAuthor,
};
