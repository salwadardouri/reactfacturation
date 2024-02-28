import React, { useState } from 'react';
import axios from 'axios';
import './SignupClient.css';
import { useNavigate } from 'react-router-dom';


const SignupClient = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    num_phone: '',
    country: '',
    code_postal: '',
    address: '',
    roles: ['CLIENT'],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/auth/signup', formData, { withCredentials: true })
      .then((response) => {
        console.log('API response:', response.data);

        // Réinitialisation du formulaire
        setFormData({
          fullname: '',
          email: '',
          password: '',
          num_phone: '',
          country: '',
          code_postal: '',
          address: '',
          roles: ['CLIENT'],
        });
        navigate('/Client');
  })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la soumission du formulaire:', error);

        if (error.response) {
          // La requête a été faite et le serveur a répondu avec un code d'erreur
          console.log('Response data:', error.response.data);
          console.log('Response status:', error.response.status);

          // Afficher le message d'erreur du serveur
          alert(error.response.data.message || 'Une erreur s\'est produite.');
        } else if (error.request) {
          // La requête a été faite, mais aucune réponse n'a été reçue
          console.log('Request made but no response received');
        } else {
          // Une erreur s'est produite lors de la configuration de la requête
          console.log('Error setting up the request:', error.message);
        }
      });
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="num_phone" value={formData.num_phone} onChange={handleChange} />
        </label>

        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </label>

        <label>
          Postal Code:
          <input type="text" name="code_postal" value={formData.code_postal} onChange={handleChange} />
        </label>

        
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupClient;