import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const PaymentStepCard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleCardClick = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/signup/creditoption'); // Cambia '/tu-ruta-aqui' a la ruta deseada
        }, 1000);
    };

    return (
        <div className="container mx-auto px-6 py-8 mt-2.5">
            <svg className="w-12 h-12" fill="#e50914" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.09 512.09" xmlSpace="preserve" stroke="#e50914"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M256.045,0c-141.382,0-256,114.618-256,256c0,85.276,42.093,162.673,108.991,209.628l-20.519,4.23 c-11.539,2.379-18.966,13.661-16.587,25.201s13.661,18.966,25.201,16.587l77.931-16.064c0.026-0.005,0.052-0.013,0.078-0.018 c0.069-0.015,0.139-0.025,0.208-0.04c0.015-0.003,0.029-0.007,0.043-0.011c0.171-0.038,0.339-0.083,0.509-0.126 c0.109-0.027,0.219-0.053,0.328-0.081c0.222-0.059,0.44-0.123,0.659-0.189c0.133-0.04,0.268-0.078,0.4-0.121 c0.2-0.064,0.397-0.134,0.593-0.203c0.145-0.051,0.291-0.101,0.435-0.156c0.181-0.068,0.358-0.141,0.536-0.214 c0.155-0.063,0.311-0.126,0.464-0.193c0.164-0.072,0.324-0.147,0.486-0.223c0.161-0.075,0.323-0.15,0.482-0.23 c0.148-0.074,0.293-0.152,0.439-0.229c0.168-0.089,0.336-0.177,0.5-0.269c0.132-0.074,0.262-0.152,0.392-0.229 c0.173-0.102,0.346-0.205,0.516-0.312c0.118-0.074,0.233-0.152,0.349-0.228c0.177-0.116,0.353-0.233,0.526-0.354 c0.104-0.073,0.205-0.148,0.307-0.223c0.18-0.131,0.36-0.264,0.535-0.4c0.089-0.07,0.176-0.141,0.264-0.212 c0.135-0.109,0.272-0.214,0.404-0.326c0.054-0.046,0.107-0.095,0.161-0.141c0.052-0.045,0.103-0.092,0.155-0.138 c1.642-1.439,3.078-3.145,4.235-5.086c0.021-0.034,0.042-0.068,0.063-0.103c0.12-0.204,0.235-0.414,0.349-0.623 c0.061-0.112,0.123-0.222,0.182-0.335c0.079-0.152,0.155-0.307,0.231-0.462c0.088-0.178,0.175-0.356,0.258-0.536 c0.05-0.11,0.098-0.221,0.146-0.332c0.101-0.23,0.199-0.46,0.291-0.694c0.013-0.033,0.028-0.065,0.041-0.098 c0.02-0.052,0.036-0.104,0.056-0.155c0.098-0.256,0.192-0.514,0.28-0.774c0.027-0.079,0.052-0.158,0.078-0.237 c0.084-0.259,0.164-0.519,0.239-0.781c0.025-0.087,0.048-0.173,0.072-0.26c0.067-0.248,0.13-0.497,0.188-0.748 c0.024-0.105,0.048-0.209,0.071-0.314c0.049-0.228,0.094-0.457,0.136-0.687c0.023-0.128,0.046-0.257,0.067-0.385 c0.033-0.204,0.063-0.41,0.09-0.616c0.021-0.154,0.04-0.307,0.057-0.461c0.02-0.179,0.036-0.359,0.052-0.539 c0.015-0.181,0.029-0.362,0.04-0.543c0.009-0.154,0.016-0.307,0.021-0.461c0.008-0.209,0.013-0.418,0.015-0.627 c0.001-0.128,0-0.256-0.001-0.384c-0.002-0.235-0.008-0.47-0.019-0.705c-0.005-0.106-0.01-0.213-0.017-0.319 c-0.015-0.258-0.035-0.515-0.059-0.771c-0.008-0.089-0.017-0.177-0.027-0.266c-0.029-0.272-0.064-0.543-0.104-0.813 c-0.012-0.081-0.024-0.163-0.037-0.244c-0.043-0.272-0.092-0.543-0.146-0.812c-0.011-0.054-0.018-0.108-0.029-0.161 c-0.007-0.035-0.017-0.068-0.024-0.103c-0.046-0.218-0.097-0.435-0.15-0.651l-15.236-68.976 c-2.541-11.505-13.928-18.771-25.433-16.23c-11.505,2.541-18.771,13.928-16.23,25.433l5.592,25.317 C80.584,396.599,42.711,329.843,42.711,256c0-117.818,95.515-213.333,213.333-213.333S469.378,138.182,469.378,256 c0,88.649-54.555,167.09-135.739,198.795c-10.975,4.286-16.397,16.657-12.111,27.632c4.286,10.975,16.657,16.397,27.632,12.111 C446.582,456.492,512.045,362.368,512.045,256C512.045,114.618,397.427,0,256.045,0z"></path> <path d="M384.051,341.335V192.002c0-11.782-9.551-21.333-21.333-21.333h-21.333c0-47.131-38.202-85.333-85.333-85.333 s-85.333,38.202-85.333,85.333h-21.333c-11.782,0-21.333,9.551-21.333,21.333v149.333c0,11.782,9.551,21.333,21.333,21.333 h213.333C374.5,362.669,384.051,353.118,384.051,341.335z M256.051,128.002c23.567,0,42.667,19.099,42.667,42.667h-85.333 C213.385,147.102,232.484,128.002,256.051,128.002z M341.385,320.002H170.718V213.335h21.333h128h21.333V320.002z"></path> <path d="M256.051,234.669c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333c11.776,0,21.333-9.557,21.333-21.333 S267.827,234.669,256.051,234.669z"></path> </g> </g> </g> </g></svg>
            <div className="text-left mb-4">
                <span className="block text-left">
                    Paso <b>2</b> de <b>2</b>
                </span>
            </div>
            <h1 className="text-3xl font-bold leading-none mb-4">
                Elige cómo quieres pagar
            </h1>
            <p>Tu forma de pago está encriptada y puedes cambiarla cuando quieras.</p>
            <p className="font-bold">Transacciones seguras y confiables. Cancela fácilmente online.</p>

            <div
                className="relative p-6 bg-white rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                onClick={handleCardClick}
            >
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                        Tarjeta de Crédito o Débito
                    </p>
                    <div className="flex space-x-3">
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png"
                            alt="Visa"
                            className="h-6"
                        />
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png"
                            alt="MasterCard"
                            className="h-6"
                        />
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png"
                            alt="American Express"
                            className="h-6"
                        />
                        <img
                            src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png"
                            alt="Diners Club"
                            className="h-6"
                        />
                    </div>
                </div>
                <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 ${loading ? 'text-gray-500' : 'text-gray-800'}`}>
                    {loading ? (
                        <Spinner /> // Aquí utilizas el componente Spinner
                    ) : (
                        '>'
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentStepCard;