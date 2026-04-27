import Swal from 'sweetalert2';
import 'Sweetalert2/dist/sweetalert2.css';
import React from 'react';
type AlertProps = {
  variant?: 'success' | 'error' | 'info' | 'warning' | 'question';
  title?: string;
  messages?: string;
  buttonConfirm?: boolean;
  buttonCancel?: boolean;
  confirmText?: string;
  cancelText?: string;
  timers?: number;
  question?: boolean;
  onOkCallback?: () => void;
  actions?:
    | 'question'
    | 'warning'
    | 'info'
    | 'error'
    | 'success'
    | 'success-confirm';
};

export const showAlert = ({
  variant = 'success',
  actions = 'success',
  title = '',
  messages = '',
  buttonConfirm = true,
  buttonCancel = false,
  question = false,
  confirmText = 'OK',
  cancelText = 'Cancel',
  timers = 1500,
  onOkCallback,
}: AlertProps) => {
  let finalVariant = variant;
  let finalConfirm = buttonConfirm;
  let finalQuestion = question;
  let finalTimers = timers;
  switch (actions) {
    case 'success':
      finalVariant = actions;
      finalConfirm = false;
      break;
    case 'success2':
      finalVariant = 'success';
      finalConfirm = true;
      finalQuestion = true;
      break;
    case 'error':
      finalVariant = actions;
      finalConfirm = false;
      break;
    case 'question':
      finalVariant = actions;
      finalConfirm = true;
      buttonCancel = true;
      break;
  }
  const alertPromise = Swal.fire({
    icon: finalVariant,
    title: title,
    text: messages,
    showConfirmButton: finalConfirm,
    showCancelButton: buttonCancel,
    allowEscapeKey: finalConfirm ? true : false,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    timer: finalConfirm ? false : finalTimers,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    customClass: {
      container: 'swal2-container-custom',
    },
  });
  if (finalQuestion) {
    alertPromise.then((result) => {
      if (actions == 'success2') {
        if (result.isConfirmed && onOkCallback) {
          props.onOkCallback();
        }
      } else if (actions == 'question') {
        if (result.isConfirmed && onOkCallback) {
          props.onOkCallback();
        } else if (result.isDenied) {
          console.log(result);
        }
      }
    });
  }
  return alertPromise;
};
