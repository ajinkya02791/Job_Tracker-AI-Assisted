import { useAuth } from '../context/AuthContext';

const InputforName = () => {

    const { form , handleChange } = useAuth();

  return (
   <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
     </div>
  )
}

export default InputforName