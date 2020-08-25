const express = require("express");
const Item = require("../items");
const router =  express.Router();

router.get("", (req, res, next) => {
  try {
    return res.json({ items: Item.dbAll() });
  } catch(e) {
    return next(e)
  }
})

router.post("", (req, res, next) => {
  try {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({ item : newItem });
  } catch(e) {
    return next(e)
  }
});

router.get("/:name", (req, res, next) => {
  try {
    let item = Item.dbQuery(req.params.name);
    return res.json({ item: item })
  } catch(e) {
    return next(e)
  }
})

router.patch("/:name", (req, res, next) => {
  try {
    let item = Item.dbUpdate(req.params.name, req.body);
    return res.json({ item: item })
  } catch(e) {
    return next(e)
  }
})

router.delete("/:name", (req, res, next) => {
  try {
    Item.dbDelete(req.params.name);
    return res.json({ message: "Deleted!" })
  } catch(e) {
    return next(e)
  }
})

module.exports = router;