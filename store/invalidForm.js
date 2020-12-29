export const state = () => ({
    isValid:false
});

export const getters = {
    errors(state){
        return state.isValid;
    }
};
