"use client"
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter()
    
    const goBack = () => {
        router.back(); // Kembali ke halaman sebelumnya menggunakan router dari Next.js
    };

    return (
        <button
        className="mt-10 -mb-10 px-9 ml-9 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 rounded-xl"
        onClick={goBack}
        >
        Kembali
        </button>
    );
};

export default BackButton;