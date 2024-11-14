import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../store/features/todoSlice";

const EditModal = ({ open, closeModal, data }) => {

    const [editData, setEditData] = useState({
        id: data.id,
        title: data.title,
        description: data.description
    })

    const dispatch = useDispatch();
    const putTodo = () => {
        const updatedTodo = {
            id: editData.id,
            title: editData.title,
            description: editData.description
        }
        dispatch(editTodo({ updTodo: updatedTodo }));
        closeModal();
    }


    return (
        <Dialog open={open} onClose={closeModal} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="text-xl text-center pb-4">Edit Todo</div>
                            <form className="w-full">
                                <div className="mb-5">
                                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required placeholder="Title" value={editData.title} onChange={(e) => setEditData({ ...editData, title: e?.target?.value })} />
                                </div>
                                <div className="mb-5">
                                    <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required placeholder="Description" onChange={(e) => setEditData({ ...editData, description: e?.target?.value })} value={editData.description} />
                                </div>
                            </form>
                        </div>
                        <div className="bg-gray-50 px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" onClick={putTodo}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={closeModal}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default EditModal
