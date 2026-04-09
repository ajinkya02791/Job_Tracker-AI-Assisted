import { useAuth } from '../context/AuthContext'

const EmailInputLogin = () => {

    const { form , handleChange } = useAuth();

  return (
     <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
    </div>
  )
}

export default EmailInputLogin