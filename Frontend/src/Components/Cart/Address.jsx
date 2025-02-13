import React, { useEffect, useState } from "react";
import { Card } from "../ui/Card";
import Input from "../ui/Input";
import Button from "../UI/Button";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const Address = ({ setSelectAddress, setAddressInfo }) => {
  const [address, setAddress] = useState([]);
  const [activeAddress, setActiveAddress] = useState({});
  const [formdata, setFormdata] = useState({
    address: "",
    city: "",
    pincode: "",
    phone: "",
    notes: "",
  });

  const userId = jwtDecode(localStorage.getItem("token")).id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formdata.address ||
      !formdata.city ||
      !formdata.pincode ||
      !formdata.phone
    ) {
      toast.error("Please fill all the required fields.");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/address/setAddress`,
        {
          ...formdata,
          userId,
        }
      );
      if (response.status === 200) {
        toast.success("Address added successfully!");
        setFormdata({
          address: "",
          city: "",
          pincode: "",
          phone: "",
          notes: "",
        });
        getAddress();
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message || "Please try again.");
    }
  };

  const getAddress = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_KEY}/address/getAddress/${userId}`
      );
      setAddress(response.data);
      console.log("response add", response.data);
    } catch (error) {
      console.log("error", error);
      toast.error(error.response.data.message || "Please try again.");
    }
  };
  useEffect(() => {
    getAddress();
  }, []);

  return (
    <>
      <div className="md:w-[45%] ">
        <div className="flex flex-wrap justify-between items-center mb-4 gap-x-1.5">
          {address &&
            address.map((add) => (
              <div
                onClick={() => (setAddressInfo(add),setActiveAddress(add._id))}
                key={add._id}
                className={(activeAddress === add._id ? "border-4 rounded-lg border-gray-900 " : " ")+ "mb-4 w-[180px]"}
              >
                <Card>
                  <p style={{ margin: "6px 0px" }}>
                    <span className="text-black">Address:</span> {add.address}
                  </p>
                  <p style={{ margin: "6px 0px" }}>
                    <span className="text-black">City:</span> {add.city}
                  </p>
                  <p style={{ margin: "6px 0px" }}>
                    <span className="text-black">Pincode:</span> {add.pincode}
                  </p>
                  <p style={{ margin: "6px 0px" }}>
                    <span className="text-black">Phone:</span> {add.phone}
                  </p>
                  <p style={{ margin: "6px 0px" }}>
                    <span className="text-black">Notes:</span> {add?.notes}
                  </p>

                  <div className="flex justify-end space-x-1.5 -mt-4">
                    {/* <Button className="mt-4">Edit</Button> */}
                    {/* <Button className="mt-4">Delete</Button> */}
                  </div>
                </Card>
              </div>
            ))}
        </div>
        <Card className="min-w-full rounded-none">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add New Address</h3>
          </div>
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
            <label className="block text-sm font-medium mb-4 ">
              Address *
              <Input
                type="text"
                placeholder="Enter your Address"
                value={formdata.address}
                onChange={(e) =>
                  setFormdata({ ...formdata, address: e.target.value })
                }
              />
            </label>

            <label className="block text-sm font-medium mb-4 ">
              City *
              <Input
                type="text"
                placeholder="Enter your City"
                value={formdata.city}
                onChange={(e) =>
                  setFormdata({ ...formdata, city: e.target.value })
                }
              />
            </label>
            <label className="block text-sm font-medium mb-4 ">
              Pincode *
              <Input
                type="text"
                placeholder="Enter your Pincode"
                value={formdata.pincode}
                onChange={(e) =>
                  setFormdata({ ...formdata, pincode: e.target.value })
                }
              />
            </label>
            <label className="block text-sm font-medium mb-4 ">
              Phone *
              <Input
                type="text"
                placeholder="Enter your Phone"
                value={formdata.phone}
                onChange={(e) =>
                  setFormdata({ ...formdata, phone: e.target.value })
                }
              />
            </label>

            <label className="block text-sm font-medium mb-1">Notes</label>
            <Input
              type="textarea"
              placeholder="Enter any additional notes"
              value={formdata.notes}
              onChange={(e) =>
                setFormdata({ ...formdata, notes: e.target.value })
              }
            />

            {/* {message && <p className="text-center text-sm">{message}</p>} */}

            <Button type="submit" className="w-full">
              Add
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Address;
