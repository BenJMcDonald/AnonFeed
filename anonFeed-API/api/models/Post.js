module.exports = {
    attributes: {
        author: { model: 'User' },
        body: { type: 'text' },
        comments: {
            collection: 'Comment',
            via: 'parentPost'
        },
        tags: { type: 'JSON' },
        bookmarkedBy: {
            collection: 'User',
            via: 'bookmarks'
        }
    }
}