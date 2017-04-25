const Article = require('mongoose').model('Article');

function validateArticle(articleArgs, req) {

}

module.exports = {
    createGet: (req,res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        let articleParts = req.body;

        let errorMsg = '';

        if (!req.isAuthenticated()) {
            errorMsg = 'Sorry, you must e logged in!';
        }else if (!articleParts.title){
            errorMsg = 'Title is required!';
        } else if (!articleParts.content) {
            errorMsg = 'Content is required!';
        }


        if (errorMsg) {
            res.render('article/create', {
                error: errorMsg
            });
            return;
        }

        let image = req.files.image;

        if (image) {
            let filenameAndExtension = image.name;
            let filenameExtensionSeparatorIndex = filenameAndExtension.lastIndexOf('.');
            let filename = filenameAndExtension.substring(0, filenameExtensionSeparatorIndex);
            let extension = filenameAndExtension.substring(filenameExtensionSeparatorIndex +1);

            let randomChars = require('./../utilities/encryption')
                .generateSalt()
                .substring(0,5)
                .replace(/\//g, 'x');

            let finalFilename = `${filename}_${randomChars}.${extension}`;

            image.mv(`./public/images/${finalFilename}`, err => {
               if (err) {
                   console.log(err.message);
               }
            });
            articleParts.imagePath = `/images/${finalFilename}`;

        }

        let userId = req.user.id;
        articleParts.author = userId;


        Article.create(articleParts).then(article => {
            req.user.articles.push(article.id);
            req.user.save(err => {
                if (err) {
                    res.render('article/create', {
                        error: err.message
                    });
                } else {
                    res.redirect('/');

                }
            });
        });
    },
    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id).populate('author').then(article => {

            res.render('article/details', article);
        });
    },

    editGet: (req, res) => {
        let id = req.params.id;

        if(!req.isAuthenticated()){
            let returnUrl = `/article/edit/${id}`;
            res.session = returnUrl;

            res.redirect('/user/login');
            return;
        }

        Article.findById(id).then(article => {
            req.user.isInRole('Admin').then(isAdmin => {
                if(!isAdmin && !req.user.isAuthor(article)) {
                    res.redirect('/');
                    return;
                }
                res.render('article/edit', article)
            });
        });

    },

    editPost: (req,res) => {
        let id = req.params.id;

        let articleArgs = req.body;

        let errorMsg = '';
        if (!articleArgs.title){
            errorMsg = 'Article title cannot be empty!';
        } else if(!articleArgs.content) {
            errorMsg = 'Article content cannot be empty!'
        }

        if (errorMsg) {
            res.render('article/edit',{error:errorMsg})
        } else {
            Article.update({_id: id, author: req.user.id}, {
                $set: {
                    title: articleArgs.title,
                    content: articleArgs.content
                }
            }).then(err => {

                res.redirect(`/article/details/${id}`);
            });
        }
    },

    deleteGet: (req, res) => {
        let id = req.params.id;

        if (!req.isAuthenticated()) {
            let returnUrl = `/article/delete/$(id)`;
            req.session.returnUrl = returnUrl;

            res.redirect('/user/login');
            return;
        }
        Article.findById(id).then(article => {
            req.user.isInRole('Admin').then(isAdmin => {
                if (!isAdmin && !req.user.isAuthor(article)) {
                    res.redirect('/');
                    return;
                }

                res.render('article/delete', article)
            });
        });
    },

 deletePost: (req, res) => {
     let id = req.params.id;

     Article.findByIdAndRemove(id).then(article => {
         let index = req.user.articles.indexOf(article, id);
         req.user.articles.splice(index, 1);
         req.user.save(err => {
             if (err) {
                 res.redirect('/', {error: err.message});
             } else {
                 res.redirect('/');
             }
         });
     });

 }



};