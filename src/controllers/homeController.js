
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let getAboutMe = (req, res) => {
    return res.render('test/aboutMe.ejs')
}


module.exports = {
    getHomePage: getHomePage,
    getAboutMe: getAboutMe
}