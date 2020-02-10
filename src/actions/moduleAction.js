export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})
export const createModule = (newModule) => ({
    type: CREATE_MODULE,
    newModule: newModule
})