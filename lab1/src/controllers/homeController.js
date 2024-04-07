const homeController = (req, res) => {
    res.render('home');
};

const loginController = (req, res) => {
    res.render('login');
};

const handleLogin = (req, res) => {
    const username = req.body.username;
    const password = +req.body.password;
    if (username === 'hoanganhdev04' && password === 123456) {
        res.redirect('/lab1/licensePlates');
    } else {
        res.render('login');
    }
};

const handleViewLicensePlates = (req, res) => {
    res.render('licensePlates');
};

const handleLicensePlates = (req, res) => {
    fetch('http://localhost:3001/vnPlate')
        .then(res => res.json())
        .then(data => {
            const indexID = +req.body.optionValue;
            const template = `
            <option value=''>-- Chọn tỉnh thành --</option>
        ${data
            .map(
                (item, index) => `<option ${indexID === index ? 'selected' : ''} value='${index}'>${item.city}</option>`
            )
            .join('')}
        `;
            const newData = { templateData: template, dataID: data[indexID] };
            return newData;
        })

        .then(newData => res.render('licensePlates', newData));
};

module.exports = {
    homeController,
    loginController,
    handleLogin,
    handleViewLicensePlates,
    handleLicensePlates,
};
