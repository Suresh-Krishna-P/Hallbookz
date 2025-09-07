import { useState } from "react";
import { useLocation } from "react-router-dom";
import "/src/Css/Payment.css";

const Payment = () => {
  // ✅ Get data from Book.jsx using React Router state
  const location = useLocation();
  const { hallName, location: venueCity, fullDayAmount } = location.state || {};

  const [formData, setFormData] = useState({
    userName: "",
    hallName: hallName || "",
    location: venueCity || "",
    date: "",
    basis: "hourly",
    hours: "",
  });

  // ✅ Hourly rate = 1/10th of full day price
  const hourlyRate = fullDayAmount ? fullDayAmount / 10 : 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    if (!fullDayAmount) return 0;
    if (formData.basis === "hourly") {
      return Number(formData.hours) * hourlyRate;
    } else {
      return fullDayAmount;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculateTotal();

    const { userName, hallName, location, date } = formData;
    const isHourly = formData.basis === "hourly";

    if (
      userName &&
      hallName &&
      location &&
      date &&
      ((isHourly && formData.hours) || !isHourly)
    ) {
      alert(`Payment Successful!\nTotal Amount: ₹${total}`);
    } else {
      alert("Please fill all the required fields.");
    }
  };

  return (
    <div className="payment-container">
      <center>
        <h2>Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="User's Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="hallName"
            value={formData.hallName}
            readOnly
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            readOnly
          />
          <input
            type="date"
            name="date"
            onChange={handleChange}
          />

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="basis"
                value="hourly"
                checked={formData.basis === "hourly"}
                onChange={handleChange}
              />
              Hourly
            </label>
            <label>
              <input
                type="radio"
                name="basis"
                value="daily"
                checked={formData.basis === "daily"}
                onChange={handleChange}
              />
              Full Day
            </label>
          </div>

          {formData.basis === "hourly" ? (
            <>
              <input
                type="number"
                name="hours"
                placeholder="No. of Hours"
                onChange={handleChange}
              />
              <p>Rate per Hour: ₹{hourlyRate}</p>
            </>
          ) : (
            <p>Full Day Price: ₹{fullDayAmount}</p>
          )}

          <div className="total-amount">
            <strong>Total: ₹{calculateTotal()}</strong>
          </div>

          <button type="submit" className="pay">
            Pay Now
          </button>
        </form>
      </center>
    </div>
  );
};

export default Payment;
