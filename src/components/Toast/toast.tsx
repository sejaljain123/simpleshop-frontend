interface ToastProps {
    message: string;
}

const Toast = ({ message }: ToastProps) => {
    console.log(message);
    return (
        <div className="toast">
        <div className="alert alert-info">
          <div>
            <span>{message} </span>
          </div>
        </div>
      </div>
    );

};

export default Toast;