export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})
export const createModule = () => ({
    type: CREATE_MODULE,
    newModule: {
        title: 'New Module',
        _id: (new Date()).getTime() + ""
    }
})