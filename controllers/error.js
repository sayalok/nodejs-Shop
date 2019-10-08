exports.get404 = (req, res, next) => {
  res.status(404).render('404', { 
  	pageTitle: 'Page Not Found',
  	path: '',
    formsCSS: false,
    productCSS: false,
    activeAddProduct: false 
  });
};
