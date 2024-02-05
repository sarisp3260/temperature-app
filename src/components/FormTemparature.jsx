
const FormTemparature = () => {


  return (
    <form className="space-x-4">
      <select className="bg-neutral-800 appearance-auto p-2 rounded-md checked:bg-yellow-900" name="optionOne">
        <option value="optionOne">Option One</option>
        <option value="optionTwo">Option Two</option>
        <option value="optionThree">Option Three</option>
      </select>
      <select className="bg-neutral-800 appearance-auto p-2 rounded-md" name="optionTwo">
        <option value="optionOne">Option One</option>
        <option value="optionTwo">Option Two</option>
        <option value="optionThree">Option Three</option>
      </select>
      <input className="bg-neutral-800 caret-pink-500 p-2 rounded-md" type="number" name="temperature" />
      <button className="bg-pink-500 p-2 rounded-md" type="submit">Submit</button>
    </form>
  )
}

export default FormTemparature