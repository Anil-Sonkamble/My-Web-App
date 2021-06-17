const saySomething = (req, res, next) => {
    res.status(200).json({
        body: '- Anil Sonkamble -'
    });
};

module.exports.saySomething = saySomething;