import type React from "react";
import { useEffect, useRef } from "react";

type ModalProps = {
    title?:string
    description?:string
    open?:boolean
    onClose?: () => void;
};

export const Modal: React.FC<ModalProps>=({title='modal title',description='',open,onClose}) =>{
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if(!ref.current)return;
    if(open){
      ref.current.showModal()
    }else{
      ref.current.close()
    }
  }, [open])
    
  return (
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            {description}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={onClose}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
}