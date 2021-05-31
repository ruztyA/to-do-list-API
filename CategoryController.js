const Services = require('../../services/CategoryService/index');
const { setLog } = require('../../helpers/utils');
const { StatusCodes, StatusCodes } = require('http-status-codes');

/**
 * Create new Category
 */
const createNewCategory = async(req, res) {
    const { name } = req.body;
    try {
        const result = await Services.addNewCategory(name);

        setLog({
            level: 'Category Controller', method: 'Create New Category', message: name
        });

        return res.status(StatusCodes.OK).json({
            success: { status: true, message: 'Success'},
            data: result
        });

    } catch(e) {

        setLog({
            level: 'Category Controller', method: 'Create New Category Failed', message: e.message
        });

        const StatusCodes = e.httpStatusCode || StatusCodes.EXPECTATION_FAILED;

        return res.status(StatusCodes).json({ success: false, message: e.message });
    }
}

const getAllCategory = async(req, res) => {
    try {
        const categories = await Services.getCategories();

        setLog({
            level: 'Category Controller', method: 'Get All Category', message: 'Success'
        });

        return res.status(StatusCodes.OK).json({
            success: { status: true, message: 'Success'},
            data: categories
        })

    } catch (e) {
        setLog({
            level: 'Category Controller', method: 'Get All Category Failed', message: e.message
        });

        const StatusCodes = e.httpStatusCode || StatusCodes.EXPECTATION_FAILED;

        return res.status(StatusCodes).json({ success: false, message: e.message });
    }
}

module.exports = { createNewCategory, getAllCategory }