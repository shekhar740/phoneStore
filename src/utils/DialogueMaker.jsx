import React from 'react';

const DialogueMaker = ({ ComingSoon, anyFunction }) => {
    return (
        // <dialog open={isOpen}> Hello world</dialog>
        <dialog id="my_modal_5" className="modal bg-coming rounded-md">
            <div className="modal-box">
                <form method="dialog" className="">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div>{anyFunction && anyFunction()}</div>
                {ComingSoon && <ComingSoon />}
            </div>
        </dialog>
    );
};

export default DialogueMaker;
