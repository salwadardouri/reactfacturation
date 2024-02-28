import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', formData, { withCredentials: true });

      console.log('API response:', response.data);

      setFormData({
        email: '',
        password: '',
      });

      if (onLoginSuccess) {
        onLoginSuccess(response.data.user);
        handleRedirect(response.data.user); // Redirect based on user role
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }
  };

  const handleRedirect = (user) => {
    const role = user?.roles[0];

    switch (role) {
      case 'EMPLOYEUR':
        navigate('/DashEmployeur');
        break;
      case 'ADMIN':
        navigate('/DashAdmin');
        break;
      case 'CLIENT':
        navigate('/Client');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
