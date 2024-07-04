function generatePayload(user) {
    return {
        _id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
    }
}

module.exports = generatePayload