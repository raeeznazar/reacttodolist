import React, { useState } from 'react';

function Input() {
    const [name, ChangeName] = useState({ firstName: "", secondName: "" });

    return (

        <div>

            <div>{name.firstName} --- {name.secondName}</div>
            <form>
                <input onChange={(e) => ChangeName({ ...name, firstName: e.target.value })} type="text" value={name.firstName} className="border p-2" />
                <input onChange={(e) => ChangeName({ ...name, secondName: e.target.value })} type="text" value={name.secondName} className="border p-2" />
            </form>
        </div>

    );
}
export default Input