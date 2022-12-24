import React from 'react';

const Modal = ({data, showModal, closeModal}) => {
    // Destructuring Data
    const {name, username, email , address, phone, website, company} = data;
    return (
        <>
            <div className={"modal fade " + (showModal ? 'show' : '')} id="ModalOpen" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{name ? name:""}</h5>
                            <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='mb-2 details'><strong>Name: </strong>{name ? name:""}</div>
                            <div className='mb-2 details'><strong>Username: </strong>{username ? username:""}</div>
                            <div className='mb-2 details'><strong>Email: </strong>{email ? email : ""}</div>
                            <div className='mb-2 details'><strong>Address: </strong>{address ? `${address.suite}, ${address.street}` : ""}</div>
                            <div className='mb-2 details'><strong>Zipcode: </strong>{address? address.zipcode: ""}</div>
                            <div className='mb-2 details'><strong>Phone: </strong>{phone ? phone:""}</div>
                            <div className='mb-2 details'><strong>Website: </strong>{website? website : ""}</div>
                            <div className='mb-2 details'><strong>Company: </strong>{company? company.name: ""}</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (<div className="modal-backdrop fade show"></div>): ("")}
            
        </>
    )
}

export default Modal;
