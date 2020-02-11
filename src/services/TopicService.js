export const findTopicsForLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bhaumik/lessons/${lessonId}/topics`)
        .then(response =>
            // console.log(response.json())
            response.json())

export default {findTopicsForLesson}