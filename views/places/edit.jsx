const React = require('react')
const Default = require('../default.jsx')

function edit_form(data) {
return(
   <Default>
    <main>
            <h1>Edit Place</h1>
            <form method = "POST" action = {`/places/${data.place.id}?_method=PUT`}>

                    <div className = "form-group">
                    <label htmlFor="name">Place Name</label>
                    <input 
                    className="form-control"
                    type="text" 
                    name = "name" 
                    id = "name" 
                    value={data.place.name}
                    required
                    />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="pic">Place Picture</label>
                     <input
                     className="form-control"
                      type="url" 
                      name ="pic"
                      id="pic" 
                      value={data.place.image}
                       />
                    </div>

                    <div className= "form-group">
                     <label htmlFor="city">City</label>
                     <input
                     className="form-control"
                      type="text" 
                      name ="city" 
                      id="city" 
                      value={data.place.city}
                      />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="state">State</label>
                     <input
                     className="form-control"
                     type="text"
                     name ="state"
                     id="state" 
                     value={data.place.state}
                     />
                    </div>

                    <div className = "form-group">
                     <label htmlFor="cuisine">Cuisines</label>
                     <input 
                     className="form-control"
                     type="text" 
                     name ="cuisines"
                     id="cuisines" 
                     value={data.place.cuisines}
                     required
                     />
                    </div>

                    <input 
                    className= "btn btn-primary"
                    type="submit" 
                    value ="Add Place"/>
                </form>
        </main>
   </Default>
)
}

module.exports = edit_form