import Mensaje from "./mensaje.model.js";

export const createMessage = async (req, res) => {
  try {
    const { name, message } = req.body;
    const newMessage = await Mensaje.create({ name, message });
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const listMessages = async (req, res) => {
  try {
    const messages = await Mensaje.find();
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
