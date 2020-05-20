const express = require("express");
const User = require('../core/user');
const router = express.Router();
const user = new User();
const database = require("../core/comment");
const db_blog = new database();
// get index pape

router.get('/', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog');
        return;
    }
    db.get(function(result){
        res.render('index', {comments: result});
    });
});
// get home
router.get('/home_blog', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('home_blog', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/');
});

//...............................................body_book status 1

router.get('/vong_lap_hang_ngay', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=vong_lap_hang_ngay');
        return;
    }
    db.get(function(result){
        res.render('status_1_vong_lap', {comments: result});
    });
});

router.get('/home_blog=vong_lap_hang_ngay', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('status_1_vong_lap', {opp:req.session.opp, name:user.username , comments: result});
        });
        return;
    }
    res.redirect('/vong_lap_hang_ngay');
});

//....................................................................statua 2
router.get('/ngay_dau_bo_ngo', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=ngay_dau_bo_ngo');
        return;
    }
    db.get(function(result){
        res.render('status_2_nhung_ngay', {comments: result});
    });
});

router.get('/home_blog=ngay_dau_bo_ngo', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('status_2_nhung_ngay', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/ngay_dau_bo_ngo');
});
// ..............................................// status 3

router.get('/an_tuong_3_lan_gap', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=an_tuong_3_lan_gap');
        return;
    }
    db.get(function(result){
        res.render('status_3_an_tuong', {comments: result});
    });
});

router.get('/home_blog=an_tuong_3_lan_gap', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('status_3_an_tuong', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/an_tuong_3_lan_gap');
});

// ................................................ status 4
router.get('/mql_phan_phong', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=mql_phan_phong');
        return;
    }
    db.get(function(result){
        res.render('status_4_mql', {comments: result});
    });
});

router.get('/home_blog=mql_phan_phong', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('status_4_mql', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/mql_phan_phong');
});
//.......................................................status 5
router.get('/nhung_gi_toi_hoc_duoc', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=nhung_gi_toi_hoc_duoc');
        return;
    }
    db.get(function(result){
        res.render('status_5_kien_thuc', {comments: result});
    });
});

router.get('/home_blog=nhung_gi_toi_hoc_duoc', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('status_5_kien_thuc', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/nhung_gi_toi_hoc_duoc');
});
//....................................... status 6

router.get('/kali_linux', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=kali_linux');
        return;
    }
    db.get(function(result){
        res.render('status_6_kali_linux', {comments: result});
    });
});

router.get('/home_blog=kali_linux', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('status_6_kali_linux', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/kali_linux');
});
//........................................... statys 7

router.get('/cun_con_lac_duong', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=cun_con_lac_duong');
        return;
    }
    db.get(function(result){
        res.render('status_7_cun_con', {comments: result});
    });
});

router.get('/home_blog=cun_con_lac_duong', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('status_7_cun_con_lac_duong', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/cun_con_lac_duong');
});
// .................................................. status 8

router.get('/cai_nguc_xieng_xich', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=cai_nguc_xieng_xich');
        return;
    }
    db.get(function(result){
        res.render('status_8_thresh', {comments: result});
    });
});
router.get('/home_blog=cai_nguc_xieng_xich', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        rdb.get(function(result){
            res.render('status_8_thresh', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/cai_nguc_xieng_xich');
});

// ............................................................ contact pa

router.get('/chuyen_cua_toi', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=chuyen_cua_toi');
        return;
    }
    db.get(function(result){
        res.render('contact_1_chuyen_hang_ngay', {comments: result});
    });
});
router.get('/home_blog=chuyen_cua_toi', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('contact_1_chuyen_hang_ngay', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/chuyen_cua_toi');
});
//...............................................................................contact2

router.get('/moi_quan_he_cua_toi_va_kali_linux', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=moi_quan_he_cua_toi_va_kali_linux');
        return;
    }
    db.get(function(result){
        res.render('contact_2_mqh', {comments: result});
    });
});
router.get('/home_blog=moi_quan_he_cua_toi_va_kali_linux', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('contact_2_mqh', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/moi_quan_he_cua_toi_va_kali_linux');
});

//..............................................................................// contact 3

router.get('/so_thich_ca_nhan', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=so_thich_ca_nhan');
        return;
    }
    db.get(function(result){
        res.render('contact_3_kali_linux', {comments: result});
    });
});
router.get('/home_blog=so_thich_ca_nhan', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('contact_3_kali_linux', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/so_thich_ca_nhan');
});
//..............................................................// contact 4

router.get('/that_bai_trong_cuoc_song', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=that_bai_trong_cuoc_song');
        return;
    }
    db.get(function(result){
        res.render('contact_4_bai_hoc', {comments: result});
    });
});
router.get('/home_blog=that_bai_trong_cuoc_song', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('contact_4_bai_hoc', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
    res.redirect('/that_bai_trong_cuoc_song');
});
//........................................................// contact 5

router.get('/may_man_trong_cuoc_song', (req ,res , next)=>{
    let user = req.session.user;
    if(user){
        res.redirect('/home_blog=may_man_trong_cuoc_song');
        return;
    }
    db.get(function(result){
        res.render('contact_5_may_man', {comments: result});
    });
});
router.get('/home_blog=may_man_trong_cuoc_song', (req, res, next)=>{
    let user = req.session.user;
    if(user){
        db.get(function(result){
            res.render('contact_5_may_man', {opp:req.session.opp, name:user.username, comments: result});
        });
        return;
    }
});

// get sign .................................
router.get('/sign_up', function(req ,res ){
    res.render('sign_up');
});
router.get('/sign_in', function(req ,res ){
    res.render('sign_in');
});

//.. gui data login , 
router.post('/login', (req ,res , next)=>{
    user.login(req.body.username, req.body.password, function(result){
        if(result){
            req.session.user = result;
            req.session.opp = 1;

            res.redirect('/home_blog');
        }
        else{
            res.send('Username/password incorrect 1!! ');
        }
    });
});

// .. gui data register data
router.post('/register', (req ,res , next)=>{
    
    let userInput = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    
    user.create(userInput, function(lastId){
        if(lastId){
            user.find(lastId, function(result){
                req.session.user = result;
                req.session.opp = 0;

                res.redirect('/home_blog');
            });
        }
        else{
            console.log('Loi trng khi tao tai khoan');
        }
    });
});


// ........................ insert  comment to atabase

db = new database();
router.post('/', (req, res, next)=>{
    var comment = [req.body.name_fr, req.body.content_blog];
    db.insert(comment, function(lastId){
        if(lastId){
            res.send(true);
        }
    });
});
//.................show coment
router.get('/db', (req, res, next) =>{
    db.get(function(result){
        res.render('index', {comments: result});
    });
});

//..........................................//
// get log out
// router.get('/loggout', (req, res, next)=>{
//     if(req.session.user){
//         req.session.destroy(function(){
//             res.redirect('/');
//         });
//     }
// });


//......................................
module.exports = router;