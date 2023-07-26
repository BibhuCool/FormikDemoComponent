import { useFormik } from "formik"

export default function FormikDemoComponent(){
    const formik = useFormik({
        initialValues : {
            Name:'',
            Price:0,
            City:'',
            Stock:false
        },
        onSubmit:values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <>
            <div className="container-fluid">
            <h2>Register Product</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input name="Name" onChange={formik.handleChange} value={formik.values.Name} type="text" /></dd>
                    <dt>Price</dt>
                    <dd><input name="Price" onChange={formik.handleChange} value={formik.values.Price} type="text" /></dd>
                    <dt>Shipped To</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value='delhi'>Delhi</option>
                            <option value='hyd'>Hyd</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-switch">
                        <input name="Stock" type="checkbox" onChange={formik.handleChange} checked={formik.values.Stock} className="form-check-input" /> Available
                    </dd>
                </dl>
                <button name="register">Register</button>
            </form>

            </div>
        </>
    )
}