import { useEffect, useState } from 'react';
import Error from './Error';
import { generarId } from '../helpers';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        // Objeto de Paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        };

        if (paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id;
            // console.log(objetoPaciente); // Actualizado
            // console.log(paciente); // Anterior
            const pacientesActualizados = pacientes.map((pacienteState) =>
                pacienteState.id === paciente.id
                    ? objetoPaciente
                    : pacienteState
            );

            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            // Creando un nuevo paciente
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //    Reiniciar el formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    };

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>
                Seguimiento Pacientes
            </h2>
            <p className='text-lg mt-5 text-center mb-10'>
                Añade pacientes y {''}
                <span className='text-indigo-600 font-bold text-lg'>
                    administralos
                </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-md py-10 px-5 animate__animated animate__fadeIn'
            >
                {error && (
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                )}

                <div className='mb-2'>
                    <label
                        htmlFor='mascota'
                        className='block text-gray-700 font-bold'
                    >
                        Nombre Mascota
                    </label>
                    <input
                        id='mascota'
                        type='text'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition duration-300'
                        placeholder='Nombre de la mascota'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='propietario'
                        className='block text-gray-700 font-bold'
                    >
                        Nombre Propietario
                    </label>
                    <input
                        id='propietario'
                        type='text'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition duration-300'
                        placeholder='Nombre del propietario'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 font-bold'
                    >
                        Email
                    </label>
                    <input
                        id='email'
                        type='email'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition duration-300'
                        placeholder='Email de contacto'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='fecha'
                        className='block text-gray-700 font-bold'
                    >
                        Fecha de Alta
                    </label>
                    <input
                        id='fecha'
                        type='date'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                        transition duration-300'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label
                        htmlFor='sintomas'
                        className='block text-gray-700 font-bold'
                    >
                        Síntomas
                    </label>
                    <textarea
                        id='sintomas'
                        className='w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm
                        placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600
                        transition duration-300'
                        placeholder='Describe los síntomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <button
                    type='submit'
                    className='bg-indigo-600 w-full px-3 py-2 text-white uppercase font-bold rounded-md hover:bg-indigo-700
                    transition duration-300'
                >
                    {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                </button>
            </form>
        </div>
    );
};

export default Formulario;
