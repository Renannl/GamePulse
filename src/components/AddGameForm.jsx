import { useState } from "react";
import "./AddGameForm.css"

function AddGameForm({ onSave, onCancel }) {
const [formData, setFormData] = useState({
    name: "",
    players: "",
    image: "",
    genre: "",
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSave = () => {
    if (!formData.name || !formData.players || !formData.image) {
    alert("Please fill in required fields: Name, Players, Image URL");
    return;
    }

    onSave({
    id: Date.now(),
    ...formData,
    players: parseInt(formData.players),
    genre: formData.genre || "No genre",
    });

    setFormData({ name: "", players: "", image: "", genre: "" });
};

return (
    <div className="add-game-form">
    <input
        type="text"
        name="name"
        placeholder="Game Name"
        value={formData.name}
        onChange={handleChange}
    />
    <input
        type="number"
        name="players"
        placeholder="Number of Players"
        value={formData.players}
        onChange={handleChange}
    />
    <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
    />
    <input
        type="text"
        name="genre"
        placeholder="Genre (optional)"
        value={formData.genre}
        onChange={handleChange}
    />

    <button onClick={handleSave}>Save</button>
    <button onClick={onCancel}>Cancel</button>
    </div>
);
}

export default AddGameForm;
