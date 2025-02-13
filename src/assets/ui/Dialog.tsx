import React, { useEffect } from "react";

const Dialog = ({
    children,
    onClose,
    isOpen,
    className,
}: {
    children?: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
    className?: string;
}) => {
    // Close the dialog when clicking outside the modal content
    // const handleBackdropClick = (event: React.MouseEvent) => {
    //     if (event.target === event.currentTarget) {
    //         onClose();
    //     }
    // };


    if (!isOpen) return null; // Do not render anything if not open

    return (
        <div
            className="p-12 h-full flex justify-center items-center fixed inset-0 bg-white/50 backdrop-blur-sm z-40"
            onClick={()=>onClose()}
        >
            <div
                className={` p-8 md:px-16 max-w-[700px] w-full  rounded-3xl z-50 backdrop-blur-sm bg-[#d3d3d3] border border-[#bcbcbc] shadow-xl ${className} relative`}
                onClick={(e) => e.stopPropagation()} // Prevent modal close on clicking inside modal
            >
                {children}
                <div onClick={() => onClose()} className="absolute -top-5 -right-5 p-2 text-white bg-black/20 rounded-full hover:bg-black/70 hover:text-white " >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
