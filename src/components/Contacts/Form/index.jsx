import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }

const Form = ({ contacts, addContact }) => {
    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = ((e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    })
    const onSubmit = ((e) => {
        e.preventDefault()
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form])
    })
    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="fullname"
                    placeholder="Full Name"
                    onChange={onChangeInput}
                    value={form.fullname} />
            </div>
            <div>
                <input
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={onChangeInput}
                    value={form.phone_number} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form;


