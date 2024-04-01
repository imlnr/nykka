const express = require("express");
const { BugModel } = require("../models/bug.model");
const bugRouter = express.Router();


bugRouter.get('/bugs', async (req, res) => {
    try {
        const bug = await BugModel.find();
        res.status(200).json(bug);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


bugRouter.get('/bugs/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const bug = await BugModel.findById(id);
        if (!bug) {
            return res.status(404).json({ message: "bug not found" });
        }
        res.status(200).json(bug);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

bugRouter.post('/bug', async (req, res) => {
    const { title, description, source, severity, raised_by } = req.body;
    try {
        const bug = new BugModel({ title, description, source, severity, raised_by });
        await bug.save();
        res.status(201).json({ message: 'Bug reported successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

bugRouter.put('/bug/:id', async (req, res) => {
    const id = req.params.id;
    const { title, description, severity } = req.body;
    try {
        const updatedBug = await BugModel.findByIdAndUpdate(id, { title, description, severity, updated_at: Date.now() });
        if (!updatedBug) {
            return res.status(404).json({ message: "Bug not found" });
        }
        res.status(200).json({ message: 'Bug updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


bugRouter.delete('/bug/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await BugModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Bug deleted Successfully ' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = {
    bugRouter
}