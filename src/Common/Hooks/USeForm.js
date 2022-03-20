import { useEffect, useState } from 'react'

const USeForm = (InitialValue) => {
    const [value, setvalue] = useState(InitialValue)




    return [value, (e) => {
      
            setvalue({ ...value, [e.target.name]: e.target.value })
        

    }

    ]
}

export default USeForm