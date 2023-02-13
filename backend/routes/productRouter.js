const productController = require("../controller/productController");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);

router.get("/allProduct", productController.getAllProduct);

router.get("/published", productController.getPublished);

router.get("/:id", productController.getProductById);
router.get("/:id", productController.updateProductById);
router.get("/:id", productController.deleteProductById);

module.exports = router;