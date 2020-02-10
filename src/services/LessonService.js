export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/modules/${moduleId}/lessons`)
        .then(response =>
            // console.log(response.json())
            response.json())

export default {findLessonsForModule}