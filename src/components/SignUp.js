import React, { useState } from 'react';
import { registerUser } from '../services/AuthService';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = tags.split(',').map(tag => tag.trim());
    registerUser(email, password, role, tagsArray)
      .then(() => {
        alert('User registered successfully!');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="client">Client</option>
        <option value="artist">Artist</option>
        <option value="staff">Staff</option>
      </select>
      <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma-separated)" />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
