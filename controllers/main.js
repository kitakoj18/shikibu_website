exports.getHome = (req, res, next) =>{
    res.render('home', {
        pageTitle: 'Shikibu - Home',
        path: '/'
    })
}

exports.getMenu = (req, res, next) =>{
    res.render('menu', {
        pageTitle: 'Shikibu - Menu',
        path: '/menu'
    })
}

exports.getLunchMenu = (req, res, next) =>{
    res.render('lunchMenu', {
        pageTitle: 'Shikibu - Lunch Menu',
        path: '/menu'
    })
}

exports.getSpecialsMenu = (req, res, next) =>{
    res.render('specialsMenu', {
        pageTitle: 'Shikibu - Specials Menu',
        path: '/menu'
    })
}

exports.getGallery = (req, res, next) =>{
    res.render('gallery', {
        pageTitle: 'Shikibu - Gallery',
        path: '/gallery'
    })
}

exports.getAbout = (req, res, next) =>{
    res.render('about', {
        pageTitle: 'Shikibu - Gallery',
        path: '/about'
    })
}

exports.getContact = (req, res, next) =>{
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contact'
    })
}