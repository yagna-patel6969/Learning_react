import { useContext, useState } from 'react'
import UserContext from '../context/UserContex';

export const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const submitHandler = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    }

    return (
        <form
                onSubmit={submitHandler}
                className="flex flex-col gap-4 bg-gray-900 p-8 rounded-xl w-80 shadow-lg"
            >
                <h2 className="text-xl font-semibold text-white text-center">Login</h2>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Name</label>
                    <input
                        type="text"
                        placeholder="Enter user name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-gray-400 text-sm">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition-colors"
                >
                    Submit
                </button>
            </form>    )
}
