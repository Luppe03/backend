exports.sendMessage = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Alla fält måste vara ifyllda" });
    }

    res.status(200).json({ message: "Meddelande skickat!" });
};
