module.exports = {
    attributes: {
        author: {model: 'User'},
        parentPost: {model: 'Post'},
        body: {type: 'text'}
    }
}