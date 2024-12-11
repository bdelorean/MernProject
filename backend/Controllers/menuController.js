import Menu from "../Model/Menu.js";

export const getAllDishes = async (req, res) => {
  try {
    const dishes = await Menu.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDish = async (req, res) => {
  const dish = new Menu({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price
  });

  try {
    const newDish = await dish.save();
    res.status(201).json(newDish);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDish = async (req, res) => {
    const { id } = req.params; // Haal het dish-ID op uit de URL-parameter
  
    try {
      await Menu.findByIdAndDelete(id); // Zoek de dish op basis van het ID en verwijder deze
  
      res.status(200).json({ message: 'Dish deleted successfully' }); // Retourneer een succesbericht als de dish succesvol is verwijderd
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' }); // Als er een fout optreedt, retourneer een 500-fout
    }
  };
