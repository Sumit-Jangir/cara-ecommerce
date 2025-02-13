import AddressModel from "../Model/AddressModel.js";


export const setAddress = async (req, res) => {
    try {
        const {userId,address,city,pincode,phone,notes} = req.body;

        const newAddress = new AddressModel({
            userId,
            address,
            city,
            pincode,
            phone,
            notes
        });

        await newAddress.save();
        res.status(200).json({ message: "Address added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAddress = async (req, res) => {
    try {
        const { userId } = req.params;
        
        const address = await AddressModel.find({ userId: userId });
        
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}