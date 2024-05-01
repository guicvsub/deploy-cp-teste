
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Nome é obrigatório' }));
      return;
    }

    if (!email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email é obrigatório' }));
      return;
    }

    if (!message.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, message: 'Mensagem é obrigatória' }));
      return;
    }

 
    console.log({ name, email, message });

   
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Contato</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem:</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Digite sua mensagem aqui"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
        <button class="bg-transparent hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-800 hover:border-transparent rounded">
  Enviar 
</button>
      </form>
    </>
  )
}

export default Form;
