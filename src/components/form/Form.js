import React, {useState} from 'react';

const Form = ({getFilter}) => {

    let [form, setForm] = useState({name:'', username:'', email:''});

    function onChange (e) {
        let newData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...newData})
        getFilter(newData)
    }

    return (
        <div>
            <form>
                <label><input type="text" name={'name'} value={form.name} onChange={onChange}/></label>
                <label><input type="text" name={'username'} value={form.username} onChange={onChange}/></label>
                <label><input type="text" name={'email'} value={form.email} onChange={onChange}/></label>
                {/*<button>Submit</button>*/}
            </form>
        </div>
    );
};

export default Form;