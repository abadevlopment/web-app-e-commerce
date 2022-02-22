import React from 'react'
import './CartWidgetModal.scss'

const CartWidgetModal = () => {
    return (
        // {/* modal */}
        // <div class="modal fade" id="cartWidgetModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="cartWidgetModalLabel" aria-hidden="true">
        <div class="modal fade" id="cartWidgetModal" data-bs-backdrop="static"  tabindex="-1" aria-labelledby="cartWidgetModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="cartWidgetModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWidgetModal