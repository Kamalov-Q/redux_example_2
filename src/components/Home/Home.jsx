const Home = () => {
    return (
        <div className="m-5">
            <button className="bg-green-700 m-3 border-none text-white px-4 py-2">Add Todo</button>
            <div className={`px-4 py-2  border-2 rounded-lg border-black flex items-center justify-between m-3 w-full`}>
                <div>
                    <div className="font-bold text-lg">
                    </div>
                    <div></div>
                </div>
                <button className='bg-red-500 z-20 rounded-md text-white border-none px-4 py-2' >Delete</button>
            </div>
        </div>
    )
}

export default Home
