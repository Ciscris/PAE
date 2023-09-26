const{Router}=require('express');

const router= Router()
const controller=require('./../controllers/news.controller');

router.get('/',controller.search)