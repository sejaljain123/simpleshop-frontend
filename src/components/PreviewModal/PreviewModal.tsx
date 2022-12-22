import { useState } from "react";
import getPDF from "../../api/getPDF";

const PrivewModal = () => {

    const fileName = "invoice_45.pdf";
    const [pdf, setPdf] = useState('');


    const getPDFFile = async () => {
        const response = await getPDF(fileName);
        setPdf(response.data);
    };
    return (
        <>
            <label htmlFor="my-modal-4" className="btn w-32" onClick={getPDFFile}>Preview</label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative h-[80vh] w-[60rem]" htmlFor="">
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <object data={pdf} type="application/pdf" width="100%" height="100%">
                        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                    </object>
                </label>
            </label>
        </>
    );
};

export default PrivewModal;