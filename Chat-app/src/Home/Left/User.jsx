function User() {
    return (
        <div className="users flex items-center gap-5 px-5 py-2 cursor-pointer border-b border-gray-600" >
            <div className="img">
                <img
                    className="w-[80px] rounded-full"
                    src="\images\Avinash.png"
                    alt=""
                />
            </div>
            <div className="name">
                <h1>Avinash Sharma</h1>
                <p>Yesterday</p>
            </div>
        </div>
    );
}

export default User;
