// Wir importieren alle Methoden unserer Models und fassen sie in Report zusammen.
import * as Customer from "../models/Customer.js";

export const getAll = async (req, res) => {
    // In diesem Controller greifen wir auf die Model-Methode getAll() zu, um alle Reports zu erhalten.
    const customers = await Customer.getAll();
    res.json(customers);
};

export const create = async (req, res) => {
    // Hier rufen wir create() aus dem Model auf.
    // Dabei übergeben wir die relevanten Daten aus req.body an die Methode.
    // Wir hatten im Model definiert, dass wir drei Argumente übergeben können,
    // Alternativ ist natürlich auch ein Objekt oder jede andere Form von Argumenten möglich.
    const result = await Customer.create(req.body);

    res.status(201).json(result);
};
