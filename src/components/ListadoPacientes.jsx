import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
            {pacientes && pacientes.length ? (
                <>
                    <h2 className='font-black text-3xl text-center mt-10 md:mt-0'>
                        Listado Pacientes
                    </h2>
                    <p className='text-lg mt-5 text-center mb-10'>
                        Agrega tus {''}
                        <span className='text-indigo-600 font-bold text-lg'>
                            pacientes y citas
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center mt-10 md:mt-0'>
                        No hay Pacientes
                    </h2>
                    <p className='text-lg mt-5 text-center mb-10'>
                        Comienza agregando pacientes {''}
                        <span className='text-indigo-600 font-bold text-lg'>
                            y aparecerán en este lugar
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
