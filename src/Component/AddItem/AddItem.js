import React from 'react';
import { useForm } from "react-hook-form";
import "./AddItem.css";


const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };


    return (
        <div>
            <h1 className='text-center fw-bold text-color mt-5 item-header'>Add New Item</h1>
            <hr className='mb-2 mx-auto' style={{ height: "5px", color: "#002266", width: "100px", borderRadius: "5px" }} />
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Your Name" {...register("userName", { required: true })} /> <br />
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Item Name" {...register("itemName", { required: true })} /><br />
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Short Description" {...register("shortDescription", { required: true })} /><br />
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Description" {...register("description", { required: true })} /><br />
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Supplier Name" {...register("supplierName", { required: true })} /><br />
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Image Url" {...register("imageUrl", { required: true })} /><br />
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} type="number" placeholder='Enter Price' {...register("price")} /><br />
                <input className='w-25 mx-auto my-1 border-0 py-1 px-2' style={{ backgroundColor: "#ecf2f9", borderRadius: "10px" }} placeholder="Enter Item Quantity" type="number" {...register("quantity")} /><br />
                <input className='update-btn' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;