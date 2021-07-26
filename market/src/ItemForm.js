import React from 'react';

function ItemForm(props) {
    const { values, change, submit, disabled, errors } = props;

    const handleChange = event => {
        const { name, value, } = event.target;
        change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className = "itemForm container" onSubmit = {handleSubmit}>
            <div className = "item inputs">
                <label>Name
                    <input
                        value = {values.name}
                        onChange = {handleChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>

                <label>Description
                    <input
                        value = {values.description}
                        onChange = {handleChange}
                        name = 'description'
                        type = 'text'
                    />
                </label>

                <label>Price
                    <input
                        value = {values.price}
                        onChange = {handleChange}
                        name = 'price'
                        type = 'text'
                    />
                </label>

                <label>Location
                    <select
                        id = 'location-dropdown'
                        onChange = {handleChange}
                        value = {values.location}
                        name = 'location'
                    >
                        <option value = ''>- Select a location -</option>
                        <option value = 'Burundi'>Burundi</option>
                        <option value = 'Comoros'>Comoros</option>
                        <option value = 'Djibouti'>Djibouti</option>
                        <option value = 'Ethiopia'>Ethiopia</option>
                        <option value = 'Eritrea'>Eritrea</option>
                        <option value = 'Kenya'>Kenya</option>
                        <option value = 'Madagascar'>Madagascar</option>
                        <option value = 'Malawi'>Malawi</option>
                        <option value = 'Mauritius'>Mauritius</option>
                        <option value = 'Mozambique'>Mozambique</option>
                        <option value = 'Réunion'>Réunion</option>
                        <option value = 'Rwanda'>Rwanda</option>
                        <option value = 'Seychelles'>Seychelles</option>
                        <option value = 'Somalia'>Somalia</option>
                        <option value = 'Somaliland'>Somaliland</option>
                        <option value = 'Tanzania'>Tanzania</option>
                        <option value = 'Uganda'>Uganda</option>
                        <option value = 'Zambia'>Zambia</option>
                        <option value = 'Zimbabwe'>Zimbabwe</option>
                    </select>
                </label>
            </div>

            <div className = "item submit">
                <button disabled = {disabled}>List Item</button>

                <div className = 'errors'>
                    <div>{errors.name}</div>
                    <div>{errors.description}</div>
                    <div>{errors.price}</div>
                </div>
            </div>
        </form>
    );
}

export default ItemForm;