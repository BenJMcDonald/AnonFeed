module.exports = {
    attributes: {
        posts : {
            collection: 'Post',
            via: 'author'
        },
        comments: {
            collection: 'Comment',
            via: 'author'
        },
        device: { type: 'JSON' },
        preferences: {type: 'JSON'},
        tags: {type: 'JSON'},
        bookmarks: { collection: 'Post', via: 'bookmarkedBy' }

    }
}