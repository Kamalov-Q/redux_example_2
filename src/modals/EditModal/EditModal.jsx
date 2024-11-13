const EditModal = ({ open, closeModal }) => {
    return (
        open ? <div
            onClick={closeModal}
            className="w-[100vw] h-[100vh] fixed z-50 top-0 left-0 bg-[#00000030] grid place-items-center"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className="bg-white lg:w-[550px] w-[500px] h-auto max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl px-6 py-5"
            >
                <div className="py-2 px-3 my-2">Edit Todo</div>
                <form>
                    <div className="mb-5">
                        <input type="text" id="base-input" className="bg-gray-50 focus-within:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required placeholder="Title" />
                    </div>
                    <div className="mb-5">
                        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 focus-within:outline-none text-sm rounded-lg block w-full p-2.5" required placeholder="Description" />
                    </div>
                    <button className="bg-blue-700 border-none px-5 py-2 text-white">Edit</button>
                </form>
            </div>
        </div> : null
    )
}

export default EditModal
