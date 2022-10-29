import React from 'react';
function FetchingError({roles}) {
    const role = roles
    return ( 
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5" >
                    <h2 className="text-center mb-4">You have to login as {role} to enter this section</h2>
                </div>

            </div>
        </div>
     );
}

export default FetchingError;