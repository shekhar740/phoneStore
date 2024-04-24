import React, { useState } from 'react'

const Management = ({ name, number }) => {
  const [checkboxes, setCheckboxes] = useState({
    manageableInventory: true,
    editableDailyActivity: true,
    receivableNotifications: true,
    undecided: true,
    chatFunctionality: true
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName]
    }));
  };

  return (
    <div className='mt-10 p-2'>
      <h1 className='text-center text-fuchsia-800 text-xl '>Agent access management</h1>
      <div className='flex justify-between mt-6 rounded-md text-xl font-semibold bg-white p-5'>
        <h4>{name ? name : "please asig name"}</h4>
        <p>{number ? number : "please aidgb num"}</p>
      </div>
      <h3 className='mt-5 text-red-600 font-semibold'>Agent Features Accessibility</h3>
      <p className='flex justify-between bg-white p-3 rounded-lg mt-3 items-center'>
        <span>Manageable Inventory</span>
        <input
          type="checkbox"
          className="toggle toggle-error"
          checked={checkboxes.manageableInventory}
          onClick={() => handleCheckboxChange('manageableInventory')}
        />
      </p>
      <p className='flex justify-between bg-white p-3 rounded-lg mt-3 items-center'>
        <span>Editable Daily Activity</span>
        <input
          type="checkbox"
          className="toggle toggle-error"
          checked={checkboxes.editableDailyActivity}
          onClick={() => handleCheckboxChange('editableDailyActivity')}
        />
      </p>
      <p className='flex justify-between bg-white p-3 rounded-lg mt-3 items-center'>
        <span>Receivable Notifications</span>
        <input
          type="checkbox"
          className="toggle toggle-error"
          checked={checkboxes.receivableNotifications}
          onClick={() => handleCheckboxChange('receivableNotifications')}
        />
      </p>
      <p className='flex justify-between bg-white p-3 rounded-lg mt-3 items-center'>
        <span>Undecided</span>
        <input
          type="checkbox"
          className="toggle toggle-error"
          checked={checkboxes.undecided}
          onClick={() => handleCheckboxChange('undecided')}
        />
      </p>
      <p className='flex justify-between bg-white p-3 rounded-lg mt-3 items-center'>
        <span>Chat Functionality</span>
        <input
          type="checkbox"
          className="toggle toggle-error"
          checked={checkboxes.chatFunctionality}
          onClick={() => handleCheckboxChange('chatFunctionality')}
        />
      </p>
      <p className='bg-blue-500 mt-5 p-2 rounded-md grid place-content-center self-center text-white font-semibold italic'>Submit</p>
    </div>
  )
}

export default Management
