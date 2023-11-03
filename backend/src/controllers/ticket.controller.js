import { Ticket } from "../dao/models/ticket.model.js";

// Controlador para crear un nuevo ticket
export const createTicket = async (req, res) => {
  try {
    const { code, amount, purchaser } = req.body;
    const ticket = new Ticket({ code, amount, purchaser });
    const newTicket = await ticket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el ticket', details: error.message });
  }
};

// Controlador para obtener todos los tickets
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los tickets', details: error.message });
  }
};

// Controlador para obtener un ticket por su código único
export const getTicketByCode = async (req, res) => {
  try {
    const code = req.params.code;
    const ticket = await Ticket.findOne({ code });
    
    if (ticket) {
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ error: 'Ticket no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el ticket', details: error.message });
  }
};


