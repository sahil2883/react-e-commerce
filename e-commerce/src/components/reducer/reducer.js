const Intialstate = {
    list:[]
}

const Add = (state = Intialstate,action) =>{
    switch(action.type){
        case "ADDTOCART" : 
        const data = action.payload
        return {
            ...state.list,
            list:[
                ...state.list,data
            ]
        }
        default : return state;
    }
}

export default Add;