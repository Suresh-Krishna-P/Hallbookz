import { useState } from 'react';
import '/src/Css/Payment.css';

const Payment = () => {
  const [formData, setFormData] = useState({
    userName: '',
    hallName: '',
    location: '',
    date: '',
    basis: 'hourly',
    hours: '',
    amountPerHour: '',
    amountPerDay: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    if (formData.basis === 'hourly') {
      return Number(formData.hours) * Number(formData.amountPerHour);
    } else {
      return Number(formData.amountPerDay);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = calculateTotal();

    const { userName, hallName, location, date } = formData;
    const isHourly = formData.basis === 'hourly';

    if (
      userName && hallName && location && date &&
      ((isHourly && formData.hours && formData.amountPerHour) ||
      (!isHourly && formData.amountPerDay))
    ) {
      alert(`Payment Successful!\nTotal Amount: ₹${total}`);
    } else {
      alert('Please fill all the required fields.');
    }
  };

  return (
    <div className="payment-container">
      <center><h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" placeholder="User's Name" onChange={handleChange} />
        <input type="text" name="hallName" placeholder="Hall Name" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        <input type="date" name="date" onChange={handleChange} />

        <div className="radio-group">
          <label>
            <input type="radio" name="basis" value="hourly" checked={formData.basis === 'hourly'} onChange={handleChange} />
            Hourly
          </label>
          <label>
            <input type="radio" name="basis" value="daily" checked={formData.basis === 'daily'} onChange={handleChange} />
            Full Day
          </label>
        </div>

        {formData.basis === 'hourly' ? (
          <>
            <input type="number" name="hours" placeholder="No. of Hours" onChange={handleChange} />
            <input type="number" name="amountPerHour" placeholder="Amount per Hour" onChange={handleChange} />
          </>
        ) : (
          <input type="number" name="amountPerDay" placeholder="Amount per Day" onChange={handleChange} />
        )}

        <div className="total-amount">
          <strong>Total: ₹{calculateTotal()}</strong>
        </div>

        <button type="submit" className='pay'>Pay Now</button>
      </form></center>
    </div>
  );
};

export default Payment;
