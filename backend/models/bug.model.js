const mongoose = require("mongoose");

const bugSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    source: { type: String },
    severity: { type: String, enum: ['Critical', 'Major', 'Medium', 'Low'], required: true },
    raised_by: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, {
    versionKey: false
});

const BugModel = mongoose.model("bugs", bugSchema);

module.exports = {
    BugModel
}