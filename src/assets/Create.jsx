import React from 'react'

function Create (){
    return (
    <div className='d-flex w-100 vh-100 justify-content-center aling-itens-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Add new user</h3>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control'/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control'/>
                </div><br />
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
    </div>
    )
}