import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        Swal.fire({
            title: '¿Estás seguro que deseas eliminar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4338CA',
            cancelButtonColor: '#B91D1D',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);
                Swal.fire('Eliminado!', 'Tu cita se ha eliminado', 'success');
            }
        });
    };

    return (
        <div className='bg-white shadow-md rounded-md mx-5 py-10 px-5 animate__animated animate__fadeIn mb-5'>
            <p className='font-bold text-gray-700 mb-1'>
                Nombre: {''}
                <span className='font-normal'>{nombre}</span>
            </p>
            <p className='font-bold text-gray-700 mb-1'>
                Propietario: {''}
                <span className='font-normal'>{propietario}</span>
            </p>
            <p className='font-bold text-gray-700 mb-1'>
                Email: {''}
                <span className='font-normal'>{email}</span>
            </p>
            <p className='font-bold text-gray-700 mb-1'>
                Fecha de Alta: {''}
                <span className='font-normal'>{fecha}</span>
            </p>
            <p className='font-bold text-gray-700'>
                Síntomas: {''}
                <span className='font-normal'>{sintomas}</span>
            </p>

            <div className='flex justify-between md:justify-around items-center mt-5'>
                <button
                    type='button'
                    className='px-3 py-2 bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-bold
                    rounded-md shadow-md flex gap-1 items-center'
                    onClick={() => setPaciente(paciente)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                        />
                    </svg>
                    Editar
                </button>

                <button
                    type='button'
                    className='px-3 py-2 bg-red-600 hover:bg-red-700 transition duration-300 text-white font-bold
                    rounded-md shadow-md flex gap-1 items-center'
                    onClick={handleEliminar}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5
                              4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                        />
                    </svg>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
