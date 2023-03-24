import { useState } from "react";
import { Dialog } from '@headlessui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../mutations/clientMutation";
import { GET_CLIENTS } from "../queries/clientQueries";

const AddClientModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const formik = useFormik({
        // InitialValues
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },

        // Validation
        validationSchema: Yup.object({
            name: Yup.string().required("Please enter name"),
            email: Yup.string().required("Please enter email").email(),
            phone: Yup.number().required("Please enter Phone no."),
        }),

        // onSubmit
        onSubmit: (values) => {
            const { name, email, phone } = values;
            addClient(name, email, phone);
            setIsOpen(false)
        }
    });

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: formik.values,
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });

            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] }
            });
        }
    });


    return (
        <>
            <button
                className="p-3 rounded-lg text-teal-800 bg-teal-100 hover:bg-teal-200"
                onClick={() => setIsOpen(true)}
            >
                Add New Client
            </button>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="fixed inset-0 p-4 pt-[25vh] overflow-y-auto"
            >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
                <Dialog.Panel className="relative bg-slate-200 max-w-xl mx-auto rounded-xl shadow-2xl ring-1 ring-black/5 p-5 space-y-2">
                    <h2 className="text-xl font-semibold">Add Client</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name && <p className="text-red-500 text-xs italic">{formik.errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && <p className="text-red-500 text-xs italic">{formik.errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.phone && <p className="text-red-500 text-xs italic">{formik.errors.phone}</p>}
                        </div>
                        <div className="flex items-center justify-center gap-5">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                        </div>
                    </form>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}

export default AddClientModal