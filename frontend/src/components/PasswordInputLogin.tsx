import { useAuth } from '../context/AuthContext'

const PasswordInputLogin = () => {

    const { form , handleChange } = useAuth();

  return (
   <div className="mb-6">
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
    </div>
  )
}

export default PasswordInputLogin