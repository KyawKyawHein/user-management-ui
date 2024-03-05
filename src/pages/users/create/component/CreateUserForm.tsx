import Breadcrumbs from '@/components/Breadcrumb'
import Checkbox from '@/components/form/input/Checkbox'
import Input from '@/components/form/input/Input'
import { useState } from 'react'

const CreateUserForm = ({name,email,isActive,setName,setEmail,setIsActive}) => {
  const [check,setCheck] = useState(false)
  const handleName = (e)=>{
    setName(e.target.value)
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handleCheckbox = ()=>{
    setCheck(!check)
  }
  return (
    <div className="bg-white rounded-xl px-8">
    <div className="pt-6">
      <h1 className="font-semibold text-xl text-gray-700">
        Create User Account
      </h1>
      <div>
        <Breadcrumbs />
      </div>
    </div>
    <div className="py-4">
        <div className="">
          <Input
          value={name}
          onChange={handleName}
            labelText="First Name"
            placeholder="First Name"
            required
          />
        </div>
      <div className="mt-3">
        <Input
        value={email}
        onChange= {handleEmail}
          labelText="Email Address"
          placeholder="username@domain.xyz"
          required
        />
      </div>
      <div className="flex items-center gap-5 mt-5 mb-7">
        {/* <Checkbox required={true} isActive={isActive} setIsActive={setIsActive} /> */}
        <input type="checkbox" checked={check} onChange={handleCheckbox} />
        <div className="flex flex-col">
          <h1 className="text-sm text-gray-400">Is Active?</h1>
          <p className="text-xs text-gray-500">
            User account is activate or deactivate
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateUserForm
