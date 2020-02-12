export const createLesson  = (moduleId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/modules/${moduleId}/lessons`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(lesson)
    }).then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/modules/${moduleId}/lessons`)
        .then(response =>
            // console.log(response.json())
            response.json())

export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/lessons/${lessonId}`,
        { method: "DELETE"
        }).then(response => response.json())

export const updateLesson  = async (newLesson, lessonId) => {
    const response = await fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/lessons/${lessonId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newLesson)
    })
    return await response.json()
}

export default {createLesson, findLessonsForModule, deleteLesson, updateLesson}